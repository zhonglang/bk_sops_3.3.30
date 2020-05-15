# -*- coding: utf-8 -*-
# @Author  : surfer
# @email   : surfer@canway.net
# @Time    : 2020/5/15 15:52
# @file    : cmdb_help.py

import requests
from config import APP_ID, APP_TOKEN, BK_PAAS_HOST
import json


def get_biz_id(bk_biz_name):
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
            if i["bk_biz_name"] == bk_biz_name:
                bk_biz_id = i['bk_biz_id']
                break
    return bk_biz_id


# print get_biz_id('蓝鲸')


def get_bk_set_id(bk_biz_id, name):
    bk_module_id = ''
    data_set = []
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
            data_set.append({'text': i['bk_set_name'], 'value': i['bk_set_id']})
    print data_set
    for j in data_set:
        bk_module_id = get_bk_module_id(bk_biz_id, j['value'], name)
        if bk_module_id:
            break
    return bk_module_id


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
                break
        return bk_module_id


# print get_bk_set_id(u'蓝鲸', 'mysql')
