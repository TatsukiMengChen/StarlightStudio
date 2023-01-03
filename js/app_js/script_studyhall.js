var start_date = new Date();
var sayings = [
    "You like her, and she broke you heart.",
    "Many people start a career with a dream, then get busy forgetting it.",
    "生命就像一朵朵花，每个人都在不同的时间绽放。",
    "做错的不是我，错的是这个世界！",
    "Even though the stars are br oken, the leaking light is s till beautiful.",
    "The happiest thing is you just be yourself someone loves you.",
    "雨下大了，回不去了，我说的不是家.",
    "我以为足够真诚就会被对得起。",
    "Rome wasn't built in a day.",
    "Let's face it!",
    "你永远都不会知道自己到底有多坚强，直到有一天你除了坚强别无选择。",
    "星光不问赶路人，时光不负有心人",
    "Dare to try, means you have already taken the first step to success. ",
    "After doing my best, I chose to follow the lead. ",
    "没有人规定一朵花一定要长成向日葵或玫瑰。",
    "是秋天染黄了树叶，还是夕阳凉了人心。",
    "Time forces people to be strong, with a smile to pay all the injuries.",
    "The deepest hurt is always the most true feelings.",
    "很多事情，只要心甘情愿，就不会觉得累。",
    "寂寞有一千种滋味，却只有一种体会，",
    "To be or not to be,it's a problem.",
    "Whatever is worth doing at all is worth doing well",
    "如果你看到前面的阴影，别怕，那是因为你背后有阳光。",
    "永不期待，永不假设，永不强求。顺其自然，若是注定发生，必会如你所愿。",
    "I want to lay in sunflower, even depressed, still toward the sun.",
    "Temporary success comes at the cost of years of failure.",
    "真正的勇气不是压倒一切，而是不被一切压倒。",
    "所有的事情到最后都会好起来的，如果不够好，说明还没到最后。",
    "Expect that there is much happiness in life that has not yet happened.",
    "It's not disappearing. It's just living a good life.",
    "生活里也要灯火可亲，有梦可做。",
    "你样样都好，样样比她强，你只有一个缺点，你不是她。",
    "Thank you for showing up, no matter what the end result is.",
    "Even if there is a break, don't fail to meet.",
    "世界太大，生命太短，要过得尽量像自己想要的样子才对",
    "不要着急，最好的总在不经意出现。",
    "People who have seen flowers will know the gentleness of the wind.",
    "Light will eventually sprinkle on you, you will be brilliant.",
    "自由散漫的凉风能治愈乱糟糟的坏心情。",
    "你不是暗淡渺小的星光，而是囊括了明月的整个银河",
    "Any mind that is capable of a real sorrow is capable of good.",
    "I came to you, twilight thousands of miles are my foreshadowing.",
    "我们坠落,破碎,掉入深渊,但我们终会被托起,被治愈,我们无所畏惧。",
    "期待与漫天繁星的相遇！"
];
var show_count = 0;
function get_left_time() {
    var cur_date = new Date();
    var lefttime = cur_date.getTime() - start_date.getTime();
    left_hour = Math.floor(lefttime/(1000*60*60)%24);
    left_min = Math.floor(lefttime/(1000*60)%60);
    left_sec = Math.floor(lefttime/1000%60);
    left_hour = (left_hour.toString().length < 2) ? "0" + left_hour : left_hour;
    left_min = (left_min.toString().length < 2) ? "0" + left_min : left_min;
    left_sec = (left_sec.toString().length < 2) ? "0" + left_sec : left_sec;
    return left_hour + ":" + left_min + ":" + left_sec;
}


window.onload = function() {
    setInterval(function() {
        var cur_date = new Date().getTime();
        document.getElementById("time_view").innerText = get_left_time();
    }, 1000);

    setInterval(function() {
        document.getElementById("life_saying").innerText = sayings[show_count];
        ++show_count;
        if (show_count == sayings.length) {
            show_count = 0;
        }
    }, 3000);
};


var finish_count = 0;
var all_task_count = 0;
var last_selected = null;
document.addEventListener("click", function(ev)
{
    if (!last_selected || !last_selected.contains(ev.target))
    {
        close_menu();
    }
});

function close_menu()
{
    document.getElementById("click_menu").style = "left: -300px";
}
function show_menu(self, ev)
{
    var menu = document.getElementById("click_menu");
    last_selected = self;
    var click_x = ev.clientX;
    var click_y = ev.clientY;
    if (click_x + 100 > document.body.clientWidth) {
        click_x -= 110;
    }
    if (click_y + 80 > document.body.clientHeight) {
        click_y -= 90;
    }
    menu.style = "left:" + click_x + "px;top: " + click_y + "px;";
}
function finish_task()
{
    last_selected.className = "finished_task";
    last_selected.setAttribute("onclick", "close_menu()");
    ++finish_count;
    close_menu();
    update_process();
}
function remove_task()
{
    last_selected.style = "display: none";
    --all_task_count;
    close_menu();
    update_process();
}
function update_process()
{
    document.getElementById("task_count").innerText = "今日完成任務:" + finish_count + "/" + all_task_count;
}
function add_task()
{
    var task_msg = prompt("输入你要完成的任务吧:", "好好学习，早日脱单！");
    if (task_msg.replace(/\s*/g,"").length == 0)
    {
        return;
    }
    if (task_msg != null || task_msg.length == 0)
    {
        ++all_task_count;
        update_process();
        var task_item = document.createElement("li");
        task_item.setAttribute("onclick", "show_menu(this, event);");
        task_item.innerText = task_msg;
        document.getElementById("task_list").appendChild(task_item);
    }
}