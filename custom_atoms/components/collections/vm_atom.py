# -*- coding: utf-8 -*-
from django.utils.translation import ugettext_lazy as _

from pipeline.component_framework.component import Component
from pipeline.conf import settings
from pipeline.core.flow.activity import Service
# from ..collections.helper.password_crypt import *
from ..collections.helper.vm_helper.vm_helper import Virtualmachine

__group_name__ = _(u"vmware接口(vmware)")


class CreateVmService(Service):
    __need_schedule__ = False  # 异步轮巡

    def execute(self, data, parent_data):  # 执行函数
        try:
            vc_host = data.get_one_of_inputs('vc_host')
            account = data.get_one_of_inputs('vc_account')
            password = data.get_one_of_inputs('vc_password')
            dc_moId = data.get_one_of_inputs('dc_moId')
            hc_moId = data.get_one_of_inputs('hc_moId')
            sh_moId = data.get_one_of_inputs('sh_moId')
            ds_moId = data.get_one_of_inputs('ds_moId')
            vs_moId = data.get_one_of_inputs('vs_moId')
            # vs_name = data.get_one_of_inputs('vs_name')
            folder_moId = data.get_one_of_inputs('folder_moId')
            vmtemplate_os = data.get_one_of_inputs('vmtemplate_os')
            vmtemplate_moId = data.get_one_of_inputs('vmtemplate_moId')
            computer_name = data.get_one_of_inputs('computer_name')
            vm_name = data.get_one_of_inputs('vm_name')
            vmtemplate_pwd = data.get_one_of_inputs('vmtemplate_pwd')
            cpu = data.get_one_of_inputs('cpu')
            mem = data.get_one_of_inputs('mem')
            disk_size = data.get_one_of_inputs('disk_size')
            disk_type = data.get_one_of_inputs('disk_type')
            ip = data.get_one_of_inputs('ip')
            mask = data.get_one_of_inputs('mask')
            gateway = data.get_one_of_inputs('gateway')
            dns = data.get_one_of_inputs('dns')

            vm = Virtualmachine(account, password, vc_host)
            params = {
                "dc_moId": dc_moId,
                "hc_moId": hc_moId,
                "sh_moId": sh_moId,
                "ds_moId": ds_moId,
                "vs_moId": vs_moId,
                "vs_name": "",
                "folder_moId": folder_moId,
                "vmtemplate_os": vmtemplate_os,
                "vmtemplate_moId": vmtemplate_moId,
                "computer_name": computer_name,
                "vm_name": vm_name,
                "vmtemplate_pwd": vmtemplate_pwd,
                "cpu": int(cpu),
                "mem": int(mem),
                "disk": disk_size,
                "disk_type": disk_type,
                "ip": ip,
                "mask": mask,
                "gateway": gateway,
                "dns": dns.split(","),
                "vmtemplate_toolstatus": "toolsRunning"
            }
            result = vm.wait_for_vmclone_finish(params)
            if result["result"]:
                data.set_outputs('result', u"创建虚拟机成功")
                # data.set_outputs('atom_res', "true")
                data.set_outputs('message', "")
                return True
                # add_result = vm.add_to_bastion_host(ip=ip, vm_name=vm_name, vmtemplate_os=vmtemplate_os)
                # if add_result["result"]:
                #     vm_moId = result["data"]._moId
                #     data.set_outputs('result', u"虚拟机ID为:{0}".format(vm_moId))
                #     data.set_outputs('atom_res', "true")
                #     data.set_outputs('message', "")
                # else:
                #     vm_moId = result["data"]._moId
                #     data.set_outputs('result', u"虚拟机ID为:{0},回写堡垒机失败".format(vm_moId))
                #     data.set_outputs('atom_res', "false")
                #     data.set_outputs('message', result["data"])
            else:
                data.set_outputs('result', u"创建虚拟机失败")
                # data.set_outputs('atom_res', "false")
                data.set_outputs('message', result["data"])
                return False
        except Exception, e:
            data.set_outputs('result', u"创建虚拟机失败")
            # data.set_outputs('atom_res', "false")
            data.set_outputs('message', str(e))
            return False

    def outputs_format(self):  # 输出结果
        return [
            self.OutputItem(name=_(u'result'), key='result', type='str'),
            # self.OutputItem(name=_(u'执行结果'), key='atom_res', type='str'),
            self.OutputItem(name=_(u'执行信息'), key='message', type='str'),
        ]


class CreateVmComponent(Component):
    name = u'创建vm虚拟机'
    code = 'create_vm'
    bound_service = CreateVmService
    form = settings.STATIC_URL + 'custom_atoms/create_vm.js'
