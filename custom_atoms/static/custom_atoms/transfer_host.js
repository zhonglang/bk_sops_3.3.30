(function () {
    $.atoms.transfer_host = [
        {
            tag_code: "bk_biz_name",
            type: "input",
            attrs: {
                name: gettext("蓝鲸业务名称"),
                placeholder: gettext("请填写业务名称"),
                validation:[
                    {
                        type: "required"
                    },
                ],

                hookable: true,

            }

        },
        {
            tag_code: "bk_module_name",
            type: "input",
            attrs: {
                name: gettext("模块名称"),
                placeholder: gettext("请输入模块名称"),
                validation: [
                    {
                        // type: "custom",
                        // args: function (value) {
                        //     var result = {
                        //         result: true,
                        //         error_message: ""
                        //     }
                        //     if (value && !Number(value)) {
                        //         result.result = false;
                        //         result.error_message = gettext("请输入数字");
                        //     }
                        //     return result;
                        // }
                        type: "required"
                    }



                ],

                hookable: true,
            }
        },
        {
            tag_code: "bk_host_ip",
            type: "textarea",
            attrs: {
                name: gettext("IP地址"),
                placeholder: gettext("IP必须填写，多个IP用换行符分隔"),
                validation:[
                    {
                        type: "required"
                    }
                ],

                hookable: true,
            }
        },


    ]
})();

