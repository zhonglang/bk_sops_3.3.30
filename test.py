# -*- coding: utf-8 -*-
# Author      : surfer
# time        : 2020/2/27 9:43
# name        : test.py
# projec_tname: src
# IDE         : PyCharm
import requests

APP_ID = 'bk_sops'
APP_TOKEN = 'e6d0bc0e-0e72-404c-af14-ce86a7f9fef0'
BK_PAAS_HOST = 'http://paas.bktest.com'
import json


def get_biz_id(name):
    data = []
    bk_biz_id = ''
    url = '{0}/api/c/compapi/v2/cc/search_business/'.format(BK_PAAS_HOST)
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
    }
    res = requests.post(url, data=json.dumps(kwargs))
    result = json.loads(res.content)
    if result['result']:
        for i in result["data"]["info"]:
            data.append({"text": i["bk_biz_name"], "value": i["bk_biz_id"]})
            if i["bk_biz_name"] == name:
                bk_biz_id = i['bk_biz_id']
    return bk_biz_id


# print get_biz_id(u'蓝鲸')


def get_bk_set_id(bk_biz_id, name):
    data = []
    bk_set_id = ''
    url = '{0}/api/c/compapi/v2/cc/search_set/'.format(BK_PAAS_HOST)
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
        'bk_biz_id': bk_biz_id
    }

    res = requests.post(url, data=kwargs)
    result = json.loads(res.content)

    if result['result']:
        for i in result['data']['info']:
            data.append({'text': i['bk_set_name'], 'value': i['bk_set_id']})
            if i['bk_set_name'] == name:
                bk_set_id = i['bk_set_id']
    return bk_set_id


# print get_bk_set_id(2, u'公共组件')


def get_bk_module_id(bk_biz_id, bk_set_id, name):
    data = []
    bk_module_id = ''
    url = '{0}/api/c/compapi/v2/cc/search_module/'.format(BK_PAAS_HOST)
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
        'bk_biz_id': bk_biz_id,
        'bk_set_id': bk_set_id
    }

    res = requests.post(url, data=kwargs)
    result = json.loads(res.content)

    if result['result']:
        for i in result['data']['info']:
            data.append({'text': i['bk_module_name'], 'value': i['bk_module_id']})
            if i['bk_module_name'] == name:
                bk_module_id = i['bk_module_id']
    return bk_module_id


print get_bk_module_id(2, 3, 'redis')
