function showdiv(content_id,ellipsis_id,ctrl_id,down_id,up_id,default_height)  {
    //省略号隐藏
    document.getElementById(ellipsis_id).style.display = "none";
    //高度展开
    document.getElementById(content_id).style.height = "";//edge不兼容fit-content，这里用""值代替
    
    //更新控件
    document.getElementById(ctrl_id).innerHTML="收起多余";
    document.getElementById(ctrl_id).href="javascript:hidediv('" +
                                                    content_id +
                                                    "','" +
                                                    ellipsis_id +
                                                    "','" +
                                                    ctrl_id +
                                                    "','" +
                                                    down_id +
                                                    "','" +
                                                    up_id +
                                                    "','" +
                                                    default_height +
                                                    "');";
    //上下拉图标切换
    document.getElementById(down_id).style.display="none";
    document.getElementById(up_id).style.display="block";
}
function hidediv(content_id,ellipsis_id,ctrl_id,down_id,up_id,default_height) {
    //省略号显示
    document.getElementById(ellipsis_id).style.display = "block";
    //高度收起
    document.getElementById(content_id).style.height = default_height;

    //更新控件
    document.getElementById(ctrl_id).innerHTML="展开更多";
    document.getElementById(ctrl_id).href="javascript:showdiv('" +
                                                    content_id +
                                                    "','" +
                                                    ellipsis_id +
                                                    "','" +
                                                    ctrl_id +
                                                    "','" +
                                                    down_id +
                                                    "','" +
                                                    up_id +
                                                    "','" +
                                                    default_height +
                                                    "');";
    //上下拉图标切换
    document.getElementById(down_id).style.display="block";
    document.getElementById(up_id).style.display="none";
}

function flashing(element_id,t_ms) {
    //定时器：ms
    var timer1 = setInterval(opacityLiner,t_ms);
    var val1 = 100;
    //透明度修改函数
    function opacityLiner(){
        var Div = document.getElementById(element_id);
        if(val1 >= 0)
        {
            Div.style.opacity = (0.99*val1+1)/100;
        }
        if(val1 < 0)
        {
            Div.style.opacity = (-0.99*val1+1)/100;

            if(val1 == -100)
            {
                //由-100变为正100
                val1 = -val1;
            }
        }
        val1--;
    }   
}