(function () {
    $.atoms.create_vm = [
        {
            tag_code: "vc_host",
            type: "input",
            attrs: {
                name: gettext("VC主机IP"),
                placeholder: gettext("必填，VC主机IP"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vc_account",
            type: "input",
            attrs: {
                name: gettext("VC账号"),
                placeholder: gettext("必填，VC账号"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vc_password",
            type: "input",
            attrs: {
                name: gettext("VC密码"),
                placeholder: gettext("必填，VC密码"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "dc_moId",
            type: "input",
            attrs: {
                name: gettext("数据中心moId"),
                placeholder: gettext("必填，datacenter moId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "hc_moId",
            type: "input",
            attrs: {
                name: gettext("hc_moId"),
                placeholder: gettext("必填，集群MoId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "sh_moId",
            type: "input",
            attrs: {
                name: gettext("sh_moId"),
                placeholder: gettext("必填，主机MoId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "ds_moId",
            type: "input",
            attrs: {
                name: gettext("存储MoId"),
                placeholder: gettext("必填，存储MoId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vs_moId",
            type: "input",
            attrs: {
                name: gettext("网卡MoId"),
                placeholder: gettext("必填，网卡MoId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "folder_moId",
            type: "input",
            attrs: {
                name: gettext("文件夹MoId"),
                placeholder: gettext("文件夹MoId"),
                hookable: true
            }
        },
        {
            tag_code: "vmtemplate_os",
            type: "input",
            attrs: {
                name: gettext("模板操作系统"),
                placeholder: gettext("必填，模板操作系统（windows/linux）"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vmtemplate_moId",
            type: "input",
            attrs: {
                name: gettext("模板MoId"),
                placeholder: gettext("必填，模板MoId"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "computer_name",
            type: "input",
            attrs: {
                name: gettext("主机名"),
                placeholder: gettext("必填，主机名"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vm_name",
            type: "input",
            attrs: {
                name: gettext("目标虚拟机名称"),
                placeholder: gettext("必填， 目标虚拟机的机器名称"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "vmtemplate_pwd",
            type: "input",
            attrs: {
                name: gettext("模板密码"),
                placeholder: gettext("必填，模板密码"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "cpu",
            type: "input",
            attrs: {
                name: gettext("cpu"),
                placeholder: gettext("必填，cpu大小"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "mem",
            type: "input",
            attrs: {
                name: gettext("内存"),
                placeholder: gettext("必填，内存大小"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "disk_type",
            type: "input",
            attrs: {
                name: gettext("磁盘类型"),
                placeholder: gettext("非必填（thin/thick）"),
                hookable: true
            }
        },
        {
            tag_code: "disk_size",
            type: "input",
            attrs: {
                name: gettext("磁盘大小"),
                placeholder: gettext("非必填,当磁盘类型不为空时，必填。"),
                hookable: true
            }
        },
        {
            tag_code: "ip",
            type: "input",
            attrs: {
                name: gettext("目标机器IP"),
                placeholder: gettext("必填，ip"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "mask",
            type: "input",
            attrs: {
                name: gettext("子网掩码"),
                placeholder: gettext("必填"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
         {
            tag_code: "gateway",
            type: "input",
            attrs: {
                name: gettext("网关"),
                placeholder: gettext("必填"),
                hookable: true,
                validation: [
                    {
                        type: "required"
                    }
                ]
            }
        },
        {
            tag_code: "dns",
            type: "input",
            attrs: {
                name: gettext("DNS列表"),
                placeholder: gettext("多个以逗号分割"),
                hookable: true
            }
        }



    ]
})();

