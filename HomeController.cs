using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Learning.Models;
using System.Text;
using System.IO;
using System.Collections.Specialized;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Web.Http;
namespace Learning.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            LearningEntities DB = new LearningEntities();
            List<Item> items = new List<Item>(DB.Item);
            ViewData["Items"] = items;
            List<Log> logs = new List<Log>(DB.Log);
            ViewData["Logs"] = logs;

            return View();

        }
        public ActionResult Add()
        {
            TestModel tm = new TestModel();
            tm.Add(this.Request.Params["Name"], Convert.ToInt32(this.Request.Params["Num"]));
            return null;
        }
        public ActionResult Borrow()
        {
            LearningEntities DB = new LearningEntities();
            Log log = new Log();
            log.Person = this.Request.Params["Person"];
            log.ItemId = Convert.ToInt32(this.Request.Params["ItemId"]);
            log.Num = Convert.ToInt32(this.Request.Params["ItemNum"]);
            log.Time = DateTime.Now;
            DB.Log.AddObject(log);

            int itemnum =  (int)DB.Item.FirstOrDefault(i=>i.Id==log.ItemId).Num;
            DB.Item.FirstOrDefault(i => i.Id == log.ItemId).Num = itemnum - log.Num;
            DB.SaveChanges();


            return null;
        }

        public ActionResult About()
        {
            ViewBag.Message = "你的应用程序说明页。";

            return View();
        }
        public ActionResult Login()
        {
            //从login页面接收登录信息的username与password
            string u_name = Request.Form["username"];
            string u_pwd = Request.Form["pwd"];

            //创建表的实体列表
            LearningEntities DB = new LearningEntities();
            List<users> DB_User = new List<users>(DB.users);

            //查寻表中是否存在该用户
            bool flag = false;
            
            int utype=0;
            foreach(users user in DB_User)
            {
                //核对信息，如果对应则标记flag为true
                if (user.uname == u_name && user.upwd == u_pwd)
                {
                    flag = true;
                    utype = user.utype;
                }   
            }
            if (!flag) return Content("查无此用户");
            if (flag && utype == 1)
            {
                //生成用户每次登录后的唯一标识
                //string token = Session.SessionID;
                //foreach (users user in DB_User)
                //{                   
                //    if (user.uname == u_name)
                //        user.token = token;
                //    DB.users.AddObject(user);
                //    DB.SaveChanges();
                return View("gly");
            }
            else if (flag && utype == 2)
                return View("gryh");
            else
                return View("Index");
        }

        public string UpImg(string imgstring)
        {
            
            int total = imgstring.Length-22;
            string base64url = imgstring.Substring(22, total);
            //string base64 = Server.UrlDecode(base64url);
            byte[] arr = Convert.FromBase64String(base64url);
            MemoryStream ms = new MemoryStream(arr);
            string id = DateTime.Now.ToString("yyyyMMddHHmmssfffffff");
            string imgFile = "img"+id + ".jpg";
            string Path = @"/upload/img/";
            string filePath = HttpContext.Server.MapPath(Path + imgFile);
            System.IO.File.WriteAllBytes(filePath, Convert.FromBase64String(base64url));
            string result = Path + imgFile;
            return result;
        }
        public ActionResult CreateStock()
        {
            
            LearningEntities DB = new LearningEntities();
            Stock stock = new Stock();
            string imgUrl;

            string formUrl = this.Request.Form[0];
            string dataUrl = this.Request.Form[1];
            formUrl = Server.UrlDecode(formUrl);

            if (string.IsNullOrEmpty(dataUrl)) 
                return Content("图片不为空"); 
            else
                imgUrl = UpImg(dataUrl);

            char[] c = new char[] { '&', '=' };
            string[] form = formUrl.Split(c);
            for (int i = 0; i < form.Length; i += 2)
            {
                if (form[i] == "mingcheng") { stock.Sname = form[i + 1]; continue; }
                else if (form[i] == "jiage") { stock.SPrice = form[i + 1]; continue; }
                else if (form[i] == "num") { stock.Snum = form[i + 1]; continue; }
                else if (form[i] == "bz") { stock.SComment = form[i + 1]; continue; }
            }

            string id = DateTime.Now.ToString("yyyyMMddHHmmssfffffff");
            stock.StockId = id;
            stock.SSaveDate = DateTime.Now;
            stock.SImgUrl = imgUrl;
            DB.Stock.AddObject(stock);
            DB.SaveChanges();
            return Content("入库成功");
        }
        public JsonResult SelectStock()
        {
            LearningEntities DB = new LearningEntities();
            Stock stock = new Stock();
            List<Stock> stockList = new List<Stock>(DB.Stock);

            return Json(stockList);
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "你的联系方式页。";

            return View();
        }
        
    }
}
