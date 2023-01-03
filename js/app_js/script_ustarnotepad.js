function download (filename, content) 
{
    // 创建隐藏的可下载链接
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}
function open_article()
{
    document.getElementById("open_file").click();
}
function read_file(self, event) {
    var title = self.value.substring(self.value.lastIndexOf("\\") + 1);
    title = title.substring( 0, title.lastIndexOf("."));
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById("content").value = event.target.result;
        document.getElementById("title").value = title;
    };

    reader.readAsText(file);
}
function save_article()
{
    var title = document.getElementById("title").value;
    if (title.replace(/\s*/g,"").length == 0)
    {
        title = '未命名';
    }
    var content = document.getElementById("content").value;
    download(title + ".txt", content);
}