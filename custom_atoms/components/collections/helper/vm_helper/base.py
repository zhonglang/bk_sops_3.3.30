# -*- coding: UTF-8 -*-
from pyVim.connect import SmartConnect, Disconnect
import ssl
# from common.log import logger
import logging
from pyVim import connect
from pyVim.task import WaitForTask
from ssl import SSLEOFError
import sys
reload(sys)
sys.setdefaultencoding("gbk")
logger = logging.getLogger('root')

class Base:
    def __init__(self, user, pwd, host):
        self.host = host
        self.user = user
        self.pwd = pwd

    def _connect_vc(self):
        try:
            context = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
            context.verify_mode = ssl.CERT_NONE
            si = SmartConnect(host=self.host, user=self.user, pwd=self.pwd, port=443, sslContext=context)
            logger.error(u"connect VC")
            return si
        except SSLEOFError, e:
            context = ssl._create_unverified_context()
            context.verify_mode = ssl.CERT_NONE
            si = SmartConnect(host=self.host, user=self.user, pwd=self.pwd, port=443, sslContext=context)
            logger.error(u"connect VC")
            return si
        except Exception, e:
            logger.exception("connect_vc")
            return None


    def _deconnect_vc(self, si):
        connect.Disconnect(si)


    def _get_content(self):
        si = self._connect_vc()
        content = si.RetrieveContent()
        return content


    # 根据moId获取VM对象
    def _get_obj_bymoId(self, content, vimtype, moId):
        obj = None
        container = content.viewManager.CreateContainerView(content.rootFolder, vimtype, True)
        for c in container.view:
            if moId:
                if c._moId == moId:
                    obj = c
                    break
            else:
                obj = None
                break
        return obj
    def get_obj(self, content, vimtype, name):

    # 根据vm_name获取obj
        """
        Return an object by name, if name is None the
        first found object is returned
        """
        obj = None
        container = content.viewManager.CreateContainerView(
            content.rootFolder, vimtype, True)
        for c in container.view:
            if name:
                if c.name == name:
                    obj = c
                    break
            else:
                obj = c
                break

        return obj


    # 获取任务的结果
    def _wait_for_task(self, task):
        """ wait for a vCenter task to finish """
        task_done = False
        while not task_done:
            if task.info.state == 'success':
                # task_done = True
                return {"result": True, "data": task.info.result}
            if task.info.state == 'error':
                # task_done = True
                return {"result": False, "data": task.info.error.msg}