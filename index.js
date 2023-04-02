// 打印
function printPdf(obj) {
    var path = $(obj).attr('data-pdf');
    var pdfForm = document.getElementById("pdf");
    var isIframe = document.getElementById("printIframe"); //获取iframe
    if (isIframe) { //如果这个iframe已经存在，就删除掉
        pdfForm.removeChild(isIframe);
    }
    var iframe_ = document.createElement("iframe"); //创建iframe元素
    iframe_.style.display = "none";
    iframe_.id = "printIframe";
    iframe_.src = path; //pdf文件路径
    pdfForm.appendChild(iframe_);

    //兼容谷歌，不兼容ie8，效果可以自己试下（谷歌浏览器推荐使用这种，效果会比较好）
    $("#printIframe")[0].contentWindow.print();
}