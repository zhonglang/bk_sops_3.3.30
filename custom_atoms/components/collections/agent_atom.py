# -*- coding: utf-8 -*-
# Author      : surfer
# time        : 2019/6/18 15:33
# name        : agent_setup.py
# projec_tname: src
# IDE         : PyCharm

import json
import requests
from django.utils.translation import ugettext_lazy as _
from config import APP_ID, APP_TOKEN, BK_PAAS_HOST
from pipeline.conf import settings
from pipeline.core.flow.activity import Service
from pipeline.component_framework.component import Component
from custom_atoms.components.collections.helper.cmdb_helper.cmdb_help import get_biz_id, get_bk_module_id, get_bk_set_id

__group_name__ = _(u"Agent配置(Agent)")


class IpRegisterService(Service):
    __need_schedule__ = False  # 异步轮巡

    def execute(self, data, parent_data):
        try:
            host_ip = data.get_one_of_inputs('bk_host_ip')
            bk_cloud_id = int(data.get_one_of_inputs('bk_cloud_id'))
            bk_biz_name = data.get_one_of_inputs('bk_biz_name')
            host_ip_lists = str(host_ip).split('\n')
            bk_biz_id = get_biz_id(bk_biz_name)
            content = self.add_host_to_resource(bk_biz_id, bk_cloud_id, host_ip_lists)
            # content = {'result':True,'data':''}
            if content["result"]:
                data.set_outputs('result', u"IP注册到cmdb成功")
                data.set_outputs('message', content["data"])
                return True
            else:
                data.set_outputs('result', u"IP注册到cmdb失败")
                data.set_outputs('message', content["data"])
                return False
        except Exception, e:
            data.set_outputs('result', u"IP注册到cmdb失败")
            data.set_outputs('message', e.message)
            return False

    def schedule(self, data, parent_data, callback_data=None):
        return True

    def outputs_format(self):

        return [
            self.OutputItem(name=_(u'result'), key='result', type='str'),
            self.OutputItem(name=_(u'执行信息'), key='message', type='str'),
        ]

    def add_host_to_resource(self, bk_biz_id, cloud_id, host_ip_list):
        is_delete = True
        host_id_list = self.get_host_id(host_ip_list)
        if host_id_list:
            is_delete = self.delete_host_id(host_id_list)
        host_info = {}
        if is_delete:
            for index, ip in enumerate(host_ip_list):
                host_info[str(index)] = {
                    "bk_host_innerip": ip,
                    "bk_cloud_id": cloud_id,
                    "import_from": "3"
                }

            data = {
                "bk_app_code": APP_ID,
                "bk_app_secret": APP_TOKEN,
                "bk_username": "admin",
                "bk_supplier_id": 0,
                "bk_biz_id": bk_biz_id,
                # "host_info": {
                #     "0": {
                #         "bk_host_innerip": host_ip_list,
                #         "bk_cloud_id": cloud_id,
                #         "import_from": "3"
                #     }
                # }
                "host_info": host_info
            }
            url = BK_PAAS_HOST + '/api/c/compapi/v2/cc/add_host_to_resource/'
            rp = requests.post(url=url, data=json.dumps(data), verify=False)
            content = json.loads(rp.content)
            return content
        else:
            return {"result": False, "data": u"删除cmdb中已存在的主机{0}失败".format(host_ip_list)}

    def get_host_id(self, host_ip_list):
        host_id_list = []
        data = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "ip": {
                "data": host_ip_list,
                "exact": 1,
                "flag": "bk_host_innerip|bk_host_outerip"
            }
        }
        url = BK_PAAS_HOST + '/api/c/compapi/v2/cc/search_host/'
        rp = requests.post(url=url, data=json.dumps(data), verify=False)
        content = json.loads(rp.content)
        if content['result'] and int(content['data']['count']) > 0:
            for i in content['data']['info']:
                host_id_list.append(str(i['host']['bk_host_id']))
        return host_id_list

    def delete_host_id(self, host_id_list):
        data = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "bk_host_id": ",".join(host_id_list)
        }
        url = BK_PAAS_HOST + '/api/c/compapi/v2/cc/delete_host/'
        rp = requests.post(url=url, data=json.dumps(data), verify=False)
        content = json.loads(rp.content)
        return content['result']


class IpRegisterComponent(Component):
    name = _(u'IP注册CMDB')
    code = 'IpRegister'
    bound_service = IpRegisterService
    form = settings.STATIC_URL + 'custom_atoms/IpRegister.js'


class TransferHostService(Service):
    __need_schedule__ = False  # 异步轮巡

    def execute(self, data, parent_data):
        try:
            host_ip = data.get_one_of_inputs('bk_host_ip')
            bk_biz_name = data.get_one_of_inputs('bk_biz_name')
            bk_module_name = data.get_one_of_inputs('bk_module_name')
            bk_biz_id = get_biz_id(bk_biz_name)
            bk_module_id = get_bk_set_id(bk_biz_id, bk_module_name)
            host_ip_lists = str(host_ip).split('\n')
            module_id_list = self.search_host_module_id(bk_biz_id, host_ip_lists)
            if bk_module_id:
                bk_module_id = int(bk_module_id)
                if bk_module_id not in module_id_list:
                    host_ids = self.get_host_id_by_ip(bk_biz_id, host_ip_lists)
                    result = self.transfer_host_module(bk_biz_id, host_ids, bk_module_id)
                    if result['result']:
                        data.set_outputs('result', u"该主机已转移到具体模块下")
                        data.set_outputs('message', result['data'])
                        return True
                    else:
                        data.set_outputs('result', u"该主机已转移到模块失败")
                        data.set_outputs('message', result['data'])
                        return False
                else:
                    data.set_outputs('result', u"该主机已属于该模块，不需要转移")
                    data.set_outputs('message', "")
                    return True


            else:
                data.set_outputs('result', u"该主机并没有转移到具体模块下面")
                data.set_outputs('message', u"缺少模块ID")
                return True
        except Exception, e:
            data.set_outputs('result', u"该主机已转移到模块失败")
            data.set_outputs('message', e.message)
            return False

    def schedule(self, data, parent_data, callback_data=None):
        return True

    def outputs_format(self):

        return [
            self.OutputItem(name=_(u'result'), key='result', type='str'),
            self.OutputItem(name=_(u'执行信息'), key='message', type='str'),
        ]

    # 获取主机ID
    def get_host_id_by_ip(self, bk_biz_id, ip_list):
        data = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "bk_biz_id": bk_biz_id,
            "ip": {
                "data": ip_list,
                "exact": 1,
                "flag": "bk_host_innerip"
            },

        }
        url = '{0}/api/c/compapi/v2/cc/search_host/'.format(BK_PAAS_HOST)
        res = requests.post(url, data=json.dumps(data), verify=False)
        bk_host_id_list = []
        if res.status_code == 200:
            content = json.loads(res.content)
            if content['result']:
                for i in content['data']['info']:
                    bk_host_id_list.append(i['host']['bk_host_id'])
        return bk_host_id_list

    def transfer_host_module(self, bk_biz_id, host_id_list, bk_module_id):
        data = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "bk_biz_id": bk_biz_id,
            "bk_host_id": host_id_list,
            "bk_module_id": [
                bk_module_id
            ],
            "is_increment": True

        }
        url = '{0}/api/c/compapi/v2/cc/transfer_host_module/'.format(BK_PAAS_HOST)
        res = requests.post(url, data=json.dumps(data), verify=False)
        if res.status_code == 200:
            content = json.loads(res.content)
            if content['result']:
                return {'result': True, 'data': content['message']}
            else:
                return {'result': False, 'data': content['message']}

    def search_host_module_id(self, bk_biz_id, ip_list):
        module_id_list = []
        data = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "bk_biz_id": bk_biz_id,
            "ip": {
                "data": ip_list,
                "exact": 1,
                "flag": "bk_host_innerip|bk_host_outerip"
            },
            "condition": [
                {
                    "bk_obj_id": "module",
                    "fields": [],
                    "condition": []
                }
            ]

        }
        url = '{0}/api/c/compapi/v2/cc/search_host/'.format(BK_PAAS_HOST)
        res = requests.post(url, data=json.dumps(data), verify=False)
        if res.status_code == 200:
            content = json.loads(res.content)
            if content['result']:
                for i in content['data']['info']:
                    module_id_list.append(i['module'][0]['bk_module_id'])
        return module_id_list


class TransferHostComponent(Component):
    name = _(u'转移主机')
    code = 'transfer_host'
    bound_service = TransferHostService
    form = settings.STATIC_URL + 'custom_atoms/transfer_host.js'
