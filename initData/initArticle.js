
var articleModel = require('../db/model/article')
initarticle = [
    {
        id: '2019040100001',
        title: '搭建服务器',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: '该方法通过node搭建原生服务器',
        content: `<h1>搭建服务器</h1><h2>原生搭建</h2><p><code>var http = require(&#39;http&#39;)
        var querystring = require(&#39;querystring&#39;) // 解析字符串
        var server = http.createServer((requset, response) =&gt; {
            let str = require.url.split(&#39;?&#39;)[1]
            let obj = querystring.parse(str)
            response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
            response.end(&#39;&lt;h2&gt;欢迎访问&lt;/h2&gt;&#39;)
        })
        server.listen(3000, err =&gt;{
            if(!err){
                console.log(&#39;服务器启动成功&#39;)
            } else {
                console.log(&#39;服务器启动失败&#39;)
            }
        })
        </code></p>`
    }, {
        id: '2019040100002',
        title: 'Express搭建服务器',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: '该方法通过Express搭建服务器',
        content: `<h1>Express搭建服务器</h1><h2>Express是什么</h2><ol><li>Express是一个基于Node.js平台的极简、灵活的web应用开发框架，它提供一系列强大的特性，帮助你快速创建各种web和移动设备应用。<li>简单来说Express就是运行在node中的用来搭建服务器的模块。</ol><h2>使用</h2><h3>基础使用</h3><p><code>// 引入Express
        var express = require(&#39;express&#39;);
        // 创建app服务对象
        var app = express();
        // 设置路由
        // 处理get请求
        app.get(&#39;/&#39;, (req, res) =&gt; 
            console.log(req.query) // 获取到请求的参数对象
            res.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
            res.send(&#39;hello world&#39;);
        });
        // 处理post请求
        app.post(&#39;/home&#39;, (req, res) =&gt;{
            console.log(req.body) // 获取到请求的参数对象
            res.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
            res.send(&#39;hello world&#39;);
        })
        // 绑定端口监听
        app.listen(3000, () =&gt; {
            console.log(&quot;server is running at http://localhost:3000&quot;);
            console.log(&quot;server is running at http://127.0.0.1:3000&quot;);
        });
        </code></p><h3>request</h3><p>1. req.query: 获取查询字符串的参数，拿到的是一个对象2. req.params: 获取get请求参数路由的参数，拿到的是一个对象3. req.body：获取post请求体，拿到的是一个对象（要借助一个中间件4. req.get：获取请求头中指定key对应的value</p><h3>response</h3><ol><li>res.send()：给浏览器做出一个响应<li>res.end()：给浏览器做出一个响应（不会自动追加响应头）<li>res.download()：告诉浏览器下载一个文件（相对路径）<li>res.sendFile()：给浏览器发送一个文件（绝对路径）<li>res.redirect()：重定向到一个新的地址（url）<li>res.set(header,value)：自定义响应头内容<li>res.get()：获取响应头指定key对应的value<li>res.status(code)：设置响应状态码</ol><h3>参数路由</h3><p><code>app.get(&#39;/user/:id&#39;, (req, res) =&gt;{
            // ...
            console.log(req.params)
            res.send(&#39;这是参数路由&#39;)
        })
        </code></p>`
    }, {
        id: '2019040100003',
        title: 'http协议',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: 'http协议',
        content: `<h1>http协议</h1><h2>http协议是什么？</h2><p>超文本传输协议（属于应用层协议）</p><h2>特点：</h2><p>无状态，现在cookie解决了无状态的问题（早起网页开发时，用cookie解决，现在是cookie和session配合使用）</p><h2>作用</h2><p>规定了服务器和客户端传递信息的规则（统称为报文，分为：请求报文、响应报文）</p><h2>版本</h2><ol><li>http 1.0（老版本）：不支持长连接<li>http 1.1（主流版本）：优点：支持长连接；弊端：同时发送资源的数量过小。<li>http 2.0（最新版）：同时发送资源的数量稍有提升</ol><h2>报文（请求报文、响应报文）的组成</h2><ol><li>报文首行<li>报文头<li>空行（仅仅作为一个分割）<li>报文体</ol><p><img alt=b6553d6b5e2bcd51b98bffe1e7a4ce3c.png src=en-resource://database/7578:1></p><h2>POST和GET</h2><p><img alt=64cd6dd493b9a2310a24875216188499.png src=en-resource://database/7580:1></p><h2>http状态码</h2><blockquote><p>f服务器给客户端的</p></blockquote><h3>作用</h3><p>告诉客户端，当前服务器处理请求的结果</p><h3>http状态码的分类</h3><ol><li>1XX：服务器已经收到了本次请求，但是还需要进一步的处理才可以。<li>2XXX：服务器已经收到了本次请求，且已经分析、处理等...最终处理完毕<li>3XX：服务器已经接收到了请求，还需要其它的资源，或者重定向到其它位置，甚至交给其它服务器处理<li>4XX：一般指请求的参数或者地址有错误，出现了服务器无法理解的请求（一般是前端的锅）<li>5XX：服务器内部错误（不是因为请求地址或者请求参数不当造成的），无法响应用户请求（一般是后盾人员的锅）</ol><h3>常见的几个状态码</h3><ol><li>200：成功（最理想状态）<li>301：重定向，被请求的旧资源永久移除了（不可以访问了），将会跳转到一个新资源，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。<li>302：重定向，被请求的旧资源还在（仍然可以访问），但会临时跳转到一个新资源，搜索引擎会抓取新的内容而保存旧的网址。<li>404：资源未找到，一般是客户端请求了不存在的资源。<li>500：服务器收到了请求，但是服务器内部产生了错误。<li>502：连接服务器失败（服务器在处理一个请求的时候，或许需要其他服务器配合，但是联系不上其他的服务器了）</ol><h2>从用户输入URL按下回车，一直到用户能看到界面，期间经历了什么？</h2><h3>DNS解析（缓存）</h3><ol><li>找浏览器DNS缓存解析域名<li>找本机DNS缓存<li>找路由器DNS缓存<li>找运营商DNS缓存（百分之80的DNS查找，到这一步就结束）<li>递归查询（最不愿意看到的事，查询的是全球13台DNS根服务器中的一个）</ol><h3>进行TCP（协议）连接，三次握手（根据上一步请求回来的ip地址，去联系服务器）</h3><ol><li>第一次握手：由浏览器发送给服务器，我想和你说话，你能听见嘛？<li>第二次握手，由服务器发送给浏览器，我能听见，你说吧<li>第三次握手，由浏览器发送给服务器，好，那我就开始说话</ol><h3>发送请求（请求报文）</h3><h3>得到响应（响应报文）</h3><h3>浏览器开始解析html</h3><ol><li>预解析：将所有外部的 资源，发请求出去<li>解析html：生成DOM树<li>解析css：生成CSSOM树<li>合并成一个render树<li>js是否操作了DOM或样式<ul><li>有：进行重绘重排（不好，1. 尽量避免；2. 最小化重绘重排）</ul><li>最终展示界面</ol><h3>断开TCP连接，四次挥手（确保数据的完整性）</h3><ol><li>第一次挥手：由浏览器发送给服务器，我的东西接受完了，你关闭吧<li>第二次挥手：由服务器发给浏览器，我还有一些东西没接收完，你等一会，我接收好了告诉你<li>第三次挥手：由服务器告诉浏览器，我接收完了，你断开吧<li>第四次挥手：由浏览器告诉服务器，好的，那我断开了</ol>`
    }, {
        id: '2019040100004',
        title: '中间件',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: '中间件',
        content: `<h1>中间件</h1><h2>简介</h2><p>概念：本质上就是一个函数，包含三个参数：request、response、next1. Express是一个自身功能极简，完全是由路由和中间件构成一个的web开发框架：从本质上来说，一个Express应用就是在调用各种中间件。2. 中间件是一个函数，它可以访问请求对象，响应对象和web应用中处于请求-响应循坏流程中的中间件，一般被命名为next的变量</p><h2>中间件的功能</h2><ol><li>执行任何代码<li>修改请求和响应对象<li>终结请求-响应循坏<li>调用堆栈的下一个中间件</ol><h2>分类</h2><h3>应用（全局）级中间件（过滤非法的请求，例如防盗链）</h3><ol><li>第一种： app.use((request, response, next)=&gt;{})<code>app.use((request, response, next)=&gt;{
            if(request.get(&#39;host&#39;)!===&#39;localhost://3000&#39;){
                response.send(&#39;禁止发送非法请求&#39;)
            } else {
                next(); // 让下一个匹配的路由或者中间件生效
            }}
            })
            // 上面的中间件过滤掉了非法请求，如果出现了非法请求，下面的代码不执行，如果没有出现非法请求，开始在下面的代码中匹配符合的内容
            app.post(&#39;/home&#39;, (req, res) =&gt;{
                console.log(req.body) // 获取到请求的参数对象
                res.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
                res.send(&#39;hello world&#39;);
            })
            </code><li>第二种写法：使用函数定义<code>function myMiddleWare( request, response, next ){
            if(request.get(&#39;host&#39;)!===&#39;localhost://3000&#39;){
                response.send(&#39;禁止发送非法请求&#39;)
            } else {
                next(); // 让下一个匹配的路由或者中间件生效
            }}
            }
            //该方法比较灵活，在需要使用中间件的地方使用，不需要的地方不用加入，同时可以出现多个中间件，处理不同的结果
            app.post(&#39;/home&#39;, myMiddleWare, myMiddleWare2，(req, res) =&gt;{
                console.log(req.body) // 获取到请求的参数对象
                res.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
                res.send(&#39;hello world&#39;);
            })
            </code></ol><h3>第三方中间件（通过npm下载的中间件，例如body-parser）</h3><ol><li>app.use(bodyParser.urlencoded({ extended: true }))</ol><p>使用body-parser中间件解析post请求过来的请求体参数为一个对象，随后挂载在request上<code>let bodyParser = require(&#39;body-parser&#39;)app.use(bodyParser.urlencoded({ extended: true }))</code></p><h3>内置中间件（express内部封装好的中间件）</h3><ol><li>app.use(express.urlencoded({ extended: true }))<li>app.use(express.static(&#39;public&#39;))</ol><h3>路由中间件（Router）</h3><h4>Router是什么</h4><p>Router是一个完整的中间件和路由系统，也可以看做是一个小型的app对象</p><h4>为什么使用Router</h4><p>为了更好的分类管理route</p><h4>Router的使用</h4><p><code>var express = require(&#39;express&#39;)let router = new express.Router();router.get(&#39;/&#39;,(req, res)=&gt;{})export default router</code><code>let router = require(&#39;./router&#39;)app.use(router)</code></p>`
    }, {
        id: '2019040100005',
        title: 'cookie和session',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: 'cookie和session',
        content: `<h1>cookie和session</h1><h2>cookie</h2><h3>cookie是什么</h3><ol><li>本质就是一个字符串，里面包含着浏览器和服务器沟通的信息（交互时产生的信息）<li>存储形式以：key- value的形式存储<li>浏览器会自动携带该网站的cookie，只要是该网站下的cookie，全部携带。</ol><h3>分类</h3><ol><li>会话cookie：关闭浏览器后，会话cookie会自动关闭，会话cookie存储在浏览器运行的那块内存上<li>持久化cookie：看过期时间，一旦到了过期时间，自动销毁，存储在用户的硬盘上</ol><h3>工作原理</h3><ol><li>当浏览器第一次请求服务器的时候，服务器可能返回一个或多个cookie给浏览器。<li><p>浏览器判断以下cookie种类：</p><ul><li>会话cookie<li><p>持久化cookie</p></ul><li><p>以后请求该网站的时候，自动携带上该网站的所有cookie（无法进行干预）</p><li>服务器拿到之前自己“种下“cookie，分析里面的内容，校验cookie的合法性，根据cookie里保存的内容，进行具体的业务逻辑</ol><h3>应用</h3><ol><li>解决http无状态的问题（例如：7天免登录，一般来说不会单独使用cookie，一般配合后台的session存储使用）<li>不同的语言、不同的后端架构cookie的具体语法是不一样的，但是cookie原理和工作过程是不变的：cookie不一定只由服务器生成，前端同样可以生成cookie，但是前端生成的cookie几乎没有意义。</ol><h3>使用</h3><h4>服务器“种下”cookie</h4><p>在express给客户端“种下”一个cookie，不同借助任何第三方库<code>response.cookie(&#39;mycookie&#39;,&#39;这是一个cookie&#39;)</code></p><h4>服务器获取用户传过来的cookie</h4><p>在express中更方便的获取客户端携带过来的cookie，要借助一个中间件，名字：cookie-parser<code>let cookieParser = require(&#39;cookie-parser&#39;)
        // 使用cookieParser，解析浏览器携带过来的cookie为一个对象，随后挂载到request上
        app.use(cookieParser())
        // 获取request上的cookie
        request.cookies
        </code></p><h4>服务器删除cookie</h4><p><code>response..clearCookie(&#39;mycookie&#39;)</code></p><h2>session</h2><h3>session是什么</h3><ol><li>标准来说，session指的是会话，但是后端人员常说的session，全称叫：服务器session会话存储</ol><h3>特点</h3><ol><li>存在于服务端<li>存储的 是浏览器和服务器之间沟通产生的一下信息<li>默认session的存储在服务器的内存中，每当一个新客户端发来请求，服务器都会新开辟出一块空间，供session会话存储使用</ol><h3>工作流程</h3><ol><li>第一浏览器请求服务器的时候，服务器会开辟出一块内存空间，供session会话存储使用<li>返回响应的时候，会自动返回一个cookie（有时候会返回多个，为了安全），cookie里包含着，上一步产生会话存储“容器”的编号（id）<li>以后请求的时候，会自动携带这个cookie给服务器<li>服务器从该cookie中拿到对应的session的id，去服务器中匹配<li>服务器会根据匹配信息，决定下一步具体的业务逻辑</ol><h4>备注：一般来说cookie一定会配合session使用</h4><h3>使用</h3><h4>下载安装</h4><ol><li>用于在express中操作session<code>npm i express-session --save</code><li>用于将session写入数据库（session持久化）<code>npm i connent-mongo --save</code></ol><h3>引入</h3><ol><li>引入express-session模块<code>const session = require(&#39;express-session&#39;) // 引入express-session模块
        </code><li>引入connect-mongo模块<code>const MongoStroe = require(&#39;connect-mongo&#39;)(session) // 引入connect-mongo模块
        </code></ol><h4>编写全局配置对象</h4><p><code>// 配置全局对象
        app.use(session({
            name: &#39;userid&#39;, // 设置cookie的name，默认值是connect.sid
            secret: &#39;coderly&#39;, // 参与加密的字符串（又称签名）
            saveUninitialized: false, // 是否在存储内容之前创建会话
            resave: true, // 是否在每次请求时，强制重新保存session，即使它们没有变化
            store: new MongoStroe({
                url: &#39;mongodb://localhost:27017/cookies_container&#39;,
                touchAfter: 24 * 3600 // 修改频率（例：在24小时之内只更新一次）
            }),
            cookie: {
                httpOnly: true, // 开启后前端无法通过JS操作cookie
                maxAge: 1000 * 30 // 设置cookie的过期时间
            }
        }));
        </code></p><h4>向session中添加一个xxx，值为yyy：</h4><p><code>req.session.xxx=yyy</code></p><h4>获取session上的xxx属性：</h4><p><code>const { xxx } = req.session</code></p><h4>使用详解</h4><h5>设置</h5><ol><li>在服务器中开辟一块内存空间，用于存储session<li>将用户的id存入上一步产生的session中<li>获取session的编号，放入一个cookie中<li>将上一步的cookie返回给客户端<code>request.session._id = findResult._id</code></ol><h5>获取</h5><ol><li>读取cookie，读取cookie总的session容器编号<li>去服务器中匹配该编号对应的session容器<li>根据匹配结果，进行具体的业务逻辑<code>const { _id } = request.session</code></ol>`
    }, {
        id: '2019040100006',
        title: 'mongoose',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: 'mongoose',
        content: `<h1>mongoose</h1><h2>基本使用</h2><h3>nodeJS安装模块</h3><p><code>npm install mongoose</code></p><h3>连接数据库</h3><p><code>var mongoose = require(&#39;mongoose&#39;);
        mongoose.set(&#39;useCreateIndex&#39;, true); // 设置这个，解决运行时的警告
        const DB_NAME = &quot;myblog&quot;; // 数据库名
        const DB_URL = &quot;localhost:27017&quot;; // 数据库连接的地址
         // 开始连接数据库 connect()返回一个状态待定（pending）的连接
        mongoose.connect(\`mongodb://\${DB_URL}/\${DB_NAME}\`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        var db = mongoose.connection; // 返回数据库
         // 监听连接状态
        db.once(&#39;open&#39;, (err) =&gt; { // 监听数据库的打开
            // we&#39;re connected!
            if (!err) {
                resolve()
                console.log(&quot;数据库连接成功&quot;);
            } else {
                reject(err)
                console.log(err);
            }
        });
        </code></p><h3>创建实例</h3><h4>第一步</h4><p><code>var mongoose = require(&#39;mongoose&#39;);
        var Schema = mongoose.Schema;
        // 创建一个约束对象实例 （第一步）
        var userSchema = new Schema({
            u_id: {
                type: String, // 学号类型为字符串
                required: true, // 限制该项为必填项
                unique: true // 限制学号是唯一的
            },
            u_name: {
                type: String,
                required: true
            },
            u_info: {
                type: Schema.Types.Mixed // 接收所有数据类型
            },
            u_data: {
                type: Date,
                default: Date.now
            }
        });
        </code></p><h4>第二步</h4><p><code>// 第一个参数与数据库中的集合相对应，第二个参数指定的是约束对象实例 （第二步）
        var studentsModel = mongoose.model(&#39;user&#39;, userSchema);
        </code></p><h4>第三步</h4><p><code>// 创建一个Promise实例，用于管理数据库连接
        let dbPromise = new Promise((resolve, reject) =&gt; {
            // 开始连接数据库 connect()返回一个状态待定（pending）的连接（第三步 ）
            // mongoose.connect(base_url); // 该方法将要被抛弃
            mongoose.connect(\`mongodb://\${DB_URL}/\${DB_NAME}\`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }); // 开始连接数据库 connect()返回一个状态待定（pending）的连接（第三步）使用新的连接方式
            var db = mongoose.connection; // 返回数据库（第三步）
            // 监听连接状态
            db.once(&#39;open&#39;, (err) =&gt; { // 监听数据库的打开
                // we&#39;re connected!
                if (!err) {
                    resolve()
                    console.log(&quot;数据库连接成功&quot;);
                } else {
                    reject(err)
                    console.log(err);
                }
            });
        });
        </code></p><h4>第四步</h4><p><code>// 第一种
        // myPromise.then(() =&gt; {
        // }, err =&gt; {
        // })
        // 第二种方法
        // myPromise.then(() =&gt; {
        // }).catch(err =&gt; {
        // })
        // 第三种
        ;
        (async () =&gt; {
            // 等待数据库连接成功
            await dbPromise;
            // 操作数据库的代码
            // ...
            console.log(1);
        })();
        </code></p><h3>CRUD操作</h3><h4>条件</h4><p>确保上面的基本使用到了第四步【<strong>结构</strong>】如下：<code>;
        (async () =&gt; {
            // 等待数据库连接成功
            await dbPromise;
            // 操作数据库的代码
            // 增
            // studentsModel.create({
            //     id: 1,
            //     name: &#39;张三&#39;,
            //     avatar: &#39;这是一个头像&#39;,
            //     age: 12,
            //     info: &#39;拼命努力吧&#39;
            // }, (err, data) =&gt; {
            //     if (!err) {
            //         console.log(&#39;数据插入成功&#39;, data);
            //     } else {
            //         console.log(err)
            //     }
            // })
            // 删
            studentsModel.deleteOne({})
            // 改
            studentsModel.update({
                age: 12
            }, {
                name: &#39;lisi&#39;
            }, (err, data) =&gt; {
                if (!err) {
                    console.log(&#39;数据修改成功&#39;, data);
                } else {
                    console.log(err)
                }
            })
            // 查
            studentsModel.find({
                age: 12
            }, (err, data) =&gt; {
                if (!err) {
                    console.log(&#39;数据查询成功&#39;, data);
                } else {
                    console.log(err)
                }
            })
        })();
        </code></p><h4>备注：以下所有方法，如果没有指定回调函数，则返回值是一个promise对象，没有回调函数，部分内容会不干活，也就是不报错，但是没有执行删除等操作</h4><h4>增</h4><h5>模型对象.create(文档对象，回调函数)</h5><p><code>studentsModel.create({        id: 1,        name: &#39;张三&#39;,        avatar: &#39;这是一个头像&#39;,        age: 12,        info: &#39;拼命努力吧&#39;    }, (err, data) =&gt; {        if (!err) {            console.log(&#39;数据插入成功&#39;, data);        } else {            console.log(err)        }    })</code></p><h5>模型对象.create(文档对象)</h5><p><code>studentsModel.create({        id: 1,        name: &#39;张三&#39;,        avatar: &#39;这是一个头像&#39;,        age: 12,        info: &#39;拼命努力吧&#39;    })</code></p><h4>删</h4><h5>模型对象.deleteOne(查询条件)</h5><p><code> studentsModel.deleteOne({})</code></p><h5>模型对象.deleteMany(查询条件)</h5><p><code> studentsModel.deleteMany({    age: 20 })</code>【<strong>备注</strong>】：没有delete方法，会报错</p><h4>改</h4><h5>模型对象.updateOne(查询条件,要更新的内容[,配置对象])</h5><ol><li>第一种方法：<code> studentsModel.updateOne({        age: 12    }, {        name: &#39;lisi&#39;    }, (err, data) =&gt; {        if (!err) {            console.log(&#39;数据修改成功&#39;, data);        } else {            console.log(err)        }    })</code><li>第二种方法：<code>let selectStudents = await studentsModel.updateOne({ age: 12 })</code></ol><h5>模型对象.updateMany(查询条件,要更新的内容[,配置对象])</h5><p><code>js studentsModel.updateMany({        age: 12    }, {        sex: &#39;男&#39;    }, (err, data) =&gt; {        if (!err) {            console.log(&#39;数据修改成功&#39;, data);        } else {            console.log(err)        }    })</code>【<strong>备注</strong>】：存在update方法，但是即将废弃，查询条件匹配到多个时，依然只修改一个，强烈建议用updateOne</p><h4>查</h4><h5>模型对象.find(查询条件[,投影])</h5><p>不管有没有数据，都返回一个数组<code> studentsModel.find({        age: 12    }, (err, data) =&gt; {        if (!err) {            console.log(&#39;数据查询成功&#39;, data);        } else {            console.log(err)        }    })</code></p><h5>模型对象.findOne(查询条件[,投影])</h5><p>找到了返回一个对象，没找到返回null<code> studentsModel.findOne({        age: 12    }, (err, data) =&gt; {        if (!err) {            console.log(&#39;数据查询成功&#39;, data);        } else {            console.log(err)        }    })</code></p><h2>连接数据库警告的解决</h2><h3><code>{ useNewUrlParser: true }</code></h3><p>1.警告提示<code>(node:19040) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.</code>2. 解决方法<code>// 在这一句的后面再加一个对象
        mongoose.connect(\`mongodb://\${DB_URL}:\${DB_PORT}/\${DB_NAME}\`)
        // 改成下面这样，这条警告就没有了
        mongoose.connect(\`mongodb://\${DB_URL}:\${DB_PORT}/\${DB_NAME}\`, { useNewUrlParser: true })
        </code></p><h3><code>{ useUnifiedTopology: true }</code></h3><ol><li>警告提示<code>(node:19380) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use thenew Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.</code><li>解决方法<code>// 继续在这一条后面添加
        mongoose.connect(\`mongodb://\${DB_URL}:\${DB_PORT}/\${DB_NAME}\`, { useNewUrlParser: true })
        // 改成下面这样，这条警告就没有了
        mongoose.connect(\`mongodb://\${DB_URL}:\${DB_PORT}/\${DB_NAME}\`, { useNewUrlParser: true, 
        useUnifiedTopology: true
         })
        </code></ol>`
    }, {
        id: '2019040100007',
        title: '跨域问题总结',
        category_id: '2019001',
        picture: '这里将要放一张照片',
        describe: '跨域问题总结',
        content: `<h1>跨域问题总结</h1><h2>为什么会有跨域这个问题？</h2><blockquote><p>原因是浏览器为了安全，而采用的同源策略（Same origin policy）</p></blockquote><h2>什么是同源策略？</h2><ol><li>同源策略是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript的浏览器都会使用这个策略。<li>Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现<li>所谓同源是指：协议、域名、端口必须要完全相同。即：协议、域名、端口都相同，才能算是在同一个域里面</ol><h2>非同源受到哪些限制？</h2><ol><li>cookie不能读取<li>DOM无法获得<li>Ajax请求不能发送</ol><h2>如何在开发中解决跨域问题</h2><h3>jsonp解决跨域发送请求跨域问题</h3><blockquote><p>要明确的是：jsonp不是一种技术，而是程序员“智慧的结晶”（利用了标签请求资源不受同源策略限制的特点）jsonp需要前后端人员互相配合</p></blockquote><h4>jsonp是什么？</h4><p>jsonp（JSON with Padding），是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求。</p><h4>jsonp怎么工作的？</h4><ol><li>网页中有一些标签天生具有跨域的能力，比如：img、link、iframe、script。<li>jsonp就是利用script标签的跨域能力来发送请求的。</ol><h4>jsonp的使用</h4><blockquote><p>创建script节点，指定src，利用标签把请求发出去定义好一个处理数据的函数把数据处理函数的名称传递个后端后端返回符合js函数调用语法的字符串</p></blockquote><ol><li>动态的创建一个script标签<code>var script = document.createElement(&#39;script&#39;);</code><li>添加请求路径和请求参数<code>script.src=&quot;url?callback=getData&quot;</code><li>定义一个全局函数<code>window.getData= function(data){console.log(data);}</code><li>把标签放入页面<code>document.body.appendChild(script)</code>5.后端配合<code>// 后端获取到参数，查询数据库，获得所需数据
        // 给请求发送响应，因为script会对请求到的数据，进行js运行，所以如果返回回来的数据中有js代码的话，会执行js代码
        response.send(\`\${callback}(\`\${JSON.stringify(data)}\`)\`)
        </code></ol><h4>局限性</h4><ol><li>只能解决GET请求跨域问题<li>必须需要后端人员配合</ol><h3>cors解决跨域</h3><h4>node后端设置</h4><p><code>response.set(&#39;Access-Control-Allow-Origin&#39;,&#39;http://localhost:8080&#39;);
        </code></p>`
    }, {
        id: '2019040100008',
        title: 'vue-router',
        category_id: '2019002',
        picture: '这里将要放一张照片',
        describe: 'vue-router',
        content: `<h1><code>vue-router</code></h1><h2>前端路由阶段</h2><h3>前后端分离阶段</h3><ol><li>随着<code>Ajax</code>的出现，有了前后端分离的开发模式。<li>后端只提供<code>API</code>来返回数据，前端通过Ajax获取数据，并且可以通过<code>JavaScript</code>将数据渲染到页面中。<li>这样做最大的优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上。<li>并且当移动端（<code>IOS</code>/<code>Android</code>）出现后，后端不需要进行任何处理，依然使用之前的一套API即可。</ol><h3>单页面应用阶段</h3><ol><li>其实<code>SPA</code>最主要的特点就是在前后端分离的基础上加了一层前端路由。<li>也就是前端来维护一套路由规则。</ol><h3>前端路由的核心是什么？</h3><ol><li>改变<code>URL</code>，但是页面不进行整体的刷新。</ol><h2>前端路由实现</h2><h3><code>URL</code>的<code>hash</code></h3><ol><li><code>URL</code>的<code>hash</code>也就是锚点（<code>#</code>），本质上是改变<code>window.location</code>的<code>href</code>属性。<li>我们可以通过直接赋值<code>location.hash</code>来改变<code>href</code>，但是页面不发生刷新。</ol><h3><code>HTML5</code>的<code>history</code>模式</h3><h4><code>pushState</code></h4><ol><li><code>history</code>接口是<code>HTML5</code>新增的，它有五种模式改变<code>URL</code>而不刷新页面。<li><code>history.pushState()</code></ol><h4><code>replaceState</code></h4><ol><li><code>history.replaceState()</code></ol><h4><code>go</code></h4><ol><li><code>history.go()</code><li><code>history.go(-1)</code>等价于<code>history.back()</code><li><code>history.go(1)</code>等价于<code>history.forward()</code><li>这三个接口等同于浏览器界面的前进后退。</ol><h2>vue-router</h2><h3>vue-router是基于路由和组件的</h3><ol><li>路由用于设定访问路径，将路径和组件映射起来。<li>在<code>vue-router</code>的单页面应用中，页面的路径的改变就是组件的切换。</ol><h3>在模块化工程中使用它（因为是一个插件，所以可以通过<code>Vue.use()</code>来安装路由功能）</h3><ol><li>第一步：导入路由对象，并且调用Vue.use(VueRouter)<li>第二步：创建路由实例，并且传入路由映射配置<li>第三步：在Vue实例中挂载创建的路由实例</ol><h3>使用<code>vue-router</code>的步骤</h3><ol><li>第一步：创建路由组件<li>第二步： 配置路由映射：组件和路径映射关系<li>第三步：使用路由：通过<code>router-link</code>和<code>router-view</code></ol><h4>介绍</h4><ol><li>&lt;router-link&gt;:该标签是一个vue-router已经内置的组件，它会被渲染成一个&lt;a&gt;标签<li>&lt;router-view&gt;:该标签会根据当前的路径，动态渲染出不同的组件<li>网页的其它内容，比如顶部的标题/导航，或者底部的一些版权信息等会和&lt;router-view&gt;处于同一个等级<li>在路由切换时，切换的是&lt;router-view&gt;挂载的组件，其它内容不会发生改变</ol><h4>router-link</h4><ol><li>to：用于指定跳转的路径<li>tag：tag可以指定&lt;router-link&gt;之后渲染成什么组件，比如下面的会被喧嚷称为&lt;li&gt;标签，而不是&lt;a&gt;</ol><p><code>&lt;router-link to=&quot;/home&quot; tag=&quot;li&quot;&gt;&lt;/router-link&gt;</code>3. replace：路由跳转默认是可以返回的，也就是push进路由栈中，而加了replace属性后，不会出现返回和前进，因为该跳转使用replaceState()4. active-class：当&lt;router-ling&gt;对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class，设置active-class可以修改默认的名称。    - 在进行高亮显示的导航菜单或者底部tabbar时，会使用到该类。    - 通常不会修改类的属性，会直接使用默认的router-link-active即可。</p><h4>this.$router和this.$route</h4><ol><li>this.$router获取的是router路由表数组。<li>this.$route获取的是当前活跃状态的那一个路由对象</ol><h3>路由的懒加载</h3><h4>官方解释</h4><ol><li>当打包构建应用时，Javascript包会变得非常大，影响页面加载。<li>如果我们能把不同路由对应的组件风割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更高效了</ol><h4>对官方解释解读</h4><ol><li>首先，我们知道路由中通常会定义很多不同的页面。<li>这个页面最后被打包在哪里呢？一般情况下，是放在一个js文件中。<li>但是，页面这么多放在一个js文件中，必然会造成这个页面非常的大。<li>如果我们一次性从服务器请求下来这个页面，可能需要花费一定的时间，甚至用户的电脑上还出现了短暂空白的情况。<li>使用路由懒加载就能解决。</ol><h4>路由懒加载做的事情</h4><ol><li>路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块。<li>只有在这个路由被访问到的时候，才加载对应的组件</ol><h4>懒加载的方式</h4><ol><li>结合Vue的异步组件和Webpack的代码分析<code>const Home = resolve =&gt; { require.ensure([&#39;../components/Home.vue&#39;], () =&gt;{ resolve(require(&#39;../components/Home.vue&#39;)) })</code><li>AMD写法<code>const About = resolve = require([ &#39;../components/About.vue&#39; ], resolve)</code><li>在es6中，我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割<code>const Home = () =&gt; import(&#39;../components/Home.vue&#39;)</code></ol><h3>传递参数</h3><p>传递参数主要有两种类型：<code>params</code>和<code>query</code></p><h4>params</h4><ol><li>配置路由格式：<code>/router/:id</code><li>传递的方式：在<code>path</code>后面跟上对应的值<li>传递后形成的路径：<code>/router/123</code></ol><h4>query</h4><ol><li>配置路由格式：/router，也就是普通配置<li>传递的方式：对象中使用query的key作为传递方式<li>传递后形成的路径：/router?id=123</ol><p><code>&lt;router-link  :to=&quot;{ path: &#39;/home&#39;,query:{  name: &#39;coderly&#39;, sex: &#39;男&#39;} }&quot;&gt;&lt;/router-link&gt;</code><code>// 获取传过来的值
this.$route.query
// 跳转传递的另一个方式
this.$router.push({
    path: &#39;/home&#39;,
    query:{
        name: &#39;coderly&#39;,
        sex: &#39;男’
    }
})
</code></p><h3>keep-alive</h3><h4>keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。</h4><p>它有两个非常重要的属性：1. include - 字符串或正则表达，只有匹配的组件会被缓存。2. 字符串或正则表达式，任何匹配的组件都不会被缓存</p><p><code>// exclude=&quot;home&quot;的home是Home组件的name值，不是路径里的name
&lt;keep-alive exclude=&quot;home，about&quot;&gt;
&lt;router-view /&gt;
&lt;/keep-alive&gt;
</code></p>`
    }, {
        id: '2019040100009',
        title: 'vue.js基础',
        category_id: '2019002',
        picture: '这里将要放一张照片',
        describe: 'vue.js基础',
        content: `<h1>vue.js基础</h1><h5>扩展</h5><h6>编程范式</h6><ul><li><p>声明式编程</p><li><p>命令式编程例如：</p><li>创建div元素，设置id属性<li>定义一个变量，赋值<li>将变量的内容放在div中</ul><h4>MVVM</h4><ul><li>M: Model 数据层<li>V: VIew<li>视图层<li>在前端开发中，通常就是DOM层<li>主要的作用是给用户展示各种信息<li>VM: ViewModel<li>视图模型层<li>视图模型层是View和Model沟通的桥梁。<li>一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时的反应到View中<li>另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件（点击、滚动、touch等）时，可以监听到，并在需要的情况下改变对应的Data。</ul><h4>生命周期</h4><p>也称hook（钩子函数）内部原理：相当于给vue实例传递一个回调函数，通过在不同阶段的回调，处理不同阶段的事情。</p><h4>指令</h4><h5>v-cloak 斗篷</h5><p><code>&lt;div id=&quot;app&quot; v-cloak&gt;{{ message }}&lt;/div&gt;</code>在vue解析之前，div中有一个属性v-cloak在vue解析之后，div中没有一个属性v-cloak【所以】在stype中设置<code>[v-cloak] {  display: none;}</code>这样可以防止在js解析比较慢的时候，出现没有解析的 Mustache 语法。</p><h4>v-bind</h4><h5>动态绑定class或者style</h5><ol><li><p>绑定对象<code>:class=&quot;{类名1：boolen，类名2：boolen}&quot;</code><code>&lt;h2 :class=&quot;{active：true}&quot;&gt;&lt;/h2&gt;</code></p><li><p>数组语法使用的少，因为无法像绑定对象一样通过true和false增删类<code>:class=&quot; [ ]”</code><code>&lt;h2 :class=&quot;[&#39;active&#39;, &#39; primary&#39;]&quot;&gt;&lt;/h2&gt;</code></p></ol><h4>计算属性</h4><p><code>computed: { }</code>定义<code>computed: {    fullName: function(){        return this.firstName + &#39; &#39; + this.lastName;    }}</code>使用<code>&lt;h2&gt;{{ fullName }}&lt;/h2&gt;</code></p><h5>getter和setter</h5><p>计算属性里的内容简写为<code>fullName: function() {    return this.firstName + this.lastName;}</code>而它原始的写法应该是<code>// 计算属性一般是没有set方法，只读属性
        fullName: {
            set: function() {
            },
            get: function() {
                return this.firstName + this.lastName;
            }
        }
        </code>每个计算属性都包含一个<code>getter</code>和<code>setter</code></p><h5>computed和methods</h5><ol><li>计算属性会进行缓存，如果多次使用，计算属性只会调用一次<li>方法中每次调用一次，里面的函数就执行一次。<li>如果对于需要进行大量耗时计算，使用computed多次调用只计算一次，而methods调用n次计算n次，所以这样使用computed节省时间。<li>计算属性所依赖的变量发生变化时调用的时候才会重新计算，如果所依赖的变量没有发生改变，多次调用只第一次进行计算。计算结果会进行缓存</ol><h4>v-on</h4><h5>当通过methods中定义方法，以供@click调用时，需要注意参数问题</h5><ol><li>如果该方法不需要额外参数，那么方法后的<code>（）</code>可以不添加，但是，如果方法本身中有一个参数，那么会默认将原生事件<code>event</code>参数传递进去。<li>如果需要同时传入某个参数，同时需要<code>event</code>，可以通过<code>$event</code>传入事件</ol><p>例如：</p><p><code>&lt;div&gt;&lt;button @click=&quot;handleAdd&quot;&gt;+1&lt;/button&gt;&lt;button @click=&quot;handleAddTen(10, $event)&quot;&gt;+10&lt;/button&gt;&lt;/div&gt;</code><code>methods: {    handleAdd(event) {        console.log(event);    }    handleAddTen(count, event) {    console.log(count,event);}</code></p><h5>v-on修饰符</h5><ol><li><code>.stop</code>- 调用event.stopPropagation()。<li><code>.prevent</code>- 调用event.preventDefault()<li><code>.{keyCode | keyAlias}</code>- 只当事件是从特定键触发时才触发回调<li><code>.native</code>- 监听组件根元素的原生事件。<li><code>.once</code>- 只触发一次回调。</ol><h5>v-model修饰符</h5><ol><li><code>.lazy</code><ul><li>默认情况下，v-model默认是在input事件中同步输入框的数据的。<ul><li>也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。<li>lazy修饰符可以让数据在失去焦点或者回车时才会更新<code>&lt;input type=&quot;text&quot; v-model.lazy=&quot;msg&quot;&gt;&lt;/input&gt;</code></ul></ul><li><code>.number</code><ul><li>默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理<li>但是如果我们希望处理的数字类型，那么最好直接将内容当做数字处理<li><code>number</code>修饰符可以让用户在输入框输入的内容自动转换成数字类型<code>&lt;input type=&quot;number&quot; v-model.number=&quot;age&quot;&gt;&lt;/input&gt;</code></ul><li><code>.trim</code><ul><li>如果输入的内容首尾有很多空格，通常我们希望将其去除<li><code>trim</code>修饰符可以过滤内容左右两边的空格<code>&lt;input type=&quot;text&quot; v-model.trim=&quot;str&quot;&gt;&lt;/input&gt;</code></ul></ol><h5>不同登录方式切换问题</h5><p>【问题】：1. 如果我们在有输入的情况下，切换了类型，我们会发现文字依然显示之前的输入的内容。但是按道理讲，我们应该切换到另一个input元素中了，在另一个input元素中，我们并没有输入内容。为什么会出现这个问题呢？【问题解答】：1. 这是因为Vue在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建新的元素。2. 在上面的案例中，Vue内部会发现原来的input不再使用，自接作为切换后的input来使用了【解决方案】：1. 如果我们不希望Vue出现类似重复利用的问题，可以给对应的input添加key2. 并且我们需要保证key的不同</p><h5>v-show和v-if</h5><ol><li>v-if当条件为false，压根不会有对应的元素在DOM中。<li>v-shwo当条件为false时，仅仅是将元素的display属性设置为none。【如何选择】<li>当需要在显示和隐藏之间切换很频繁时，使用v-show2.当只有一次切换时，使用v-if</ol><h5>响应式的方法</h5><h6>pop</h6><h6>push</h6><h6>shift</h6><h6>unshift</h6><h6>splice</h6><h6>sort</h6><h6>reverse</h6><p>【注意】：1. 通过索引值修改数组内容不是响应式的2. 虽然你内部已经修改成功了，值也变了，但是不会响应到页面上。就是页面上的内容不会发生改变</p><p>【解决方法】：1.<code>Vue.set(this.arr, 0, &#39;新内容&#39;) // 修改数组下标为0的内容
        </code>2.<code>this.arr.splice(0,1, &#39;新内容&#39;) // 与上一个方法一样的效果
        </code></p><h4>过滤器</h4><p><code>filters:{    showPrive(price) {        return &#39;￥&#39; + price.toFixed(2);    }}</code></p><h4>v-model</h4><p>常使用于表单数据双向绑定</p><h4>is属性</h4><p>有些<code>HTML</code>元素，诸如 <code>&lt;ul&gt;</code>、<code>&lt;ol&gt;</code>、<code>&lt;table&gt;</code> 和 <code>&lt;select&gt;</code>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <code>&lt;li&gt;</code>、<code>&lt;tr&gt;</code> 和 <code>&lt;option&gt;</code>，只能出现在其它某些特定的元素内部。所以如果我们在<code>table</code>里面使用组件时：<code>// 这样使用会出现一些约束问题
        &lt;table&gt;
            &lt;blog-post-row&gt;&lt;/blog-post-row&gt;
        &lt;/table&gt;
        </code><code>// 通过is属性将tr解析为“blog-post-row“标签
        &lt;table&gt;
            &lt;tr is=&quot;blog-post-row&quot;&gt;&lt;/tr&gt;
        &lt;/table&gt;
        </code></p>`
    }, {
        id: '2019040100010',
        title: '前端模块化',
        category_id: '2019002',
        picture: '这里将要放一张照片',
        describe: '前端模块化',
        content: `<h3>前端模块化</h3><hr><h4><code>commonjs</code></h4><h5>导出和导入</h5><p><code>commonjs</code>的导出：<code>module.exports = {    flag: true,    test(a, b) {        return a + b    }    demo(a, b) {        reutn a * b    }}</code><code>commonjs</code>的导入：<code>// commonjs模块
        let { test, demo, flag } = require(&#39;moduleA&#39;);
        // 等同于
        let _mA = require(&#39;moduleA&#39;);
        let test = _mA.test;
        let demo = _mA.demo;
        let flag = _mA.flag;
        </code></p><h4>ES6模块化</h4><h5>导出<code>export</code></h5><p><code>let name = &#39;ly&#39;let age = 18export { name, age }</code></p><h6><code>export default</code></h6><p>某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名，并且<code>export default</code>在同一个模块里面，不允许同时存在多个1. 这个时候就可以使用<code>export default</code><code>var addr = &#39;shaoxin&#39;;export default addr</code><code>// 不需要使用大括号，因为只能导出一个。
        // import addr from &#39;./a.js&#39;,可以不用使用导出提供的名字，我们可以自己定义名字，如下面：
        import name from &#39;./a.js&#39;
        </code></p><h4>导入<code>import</code></h4><p>首先，我们需要在HTML代码中<strong>引入两个js文件</strong>，并且类型需要设置为<strong>module</strong><code>&lt;script src= &quot;info.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;&lt;script src= &quot;main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</code><code>import { name, age } from &#39;./a.js&#39;</code></p><h5>统一全部导入</h5><ol><li>第一种<code>import { name, age , ... } from &#39;./a.js&#39;console.log(name);</code><li>第二种：<code>import * as info from &#39;./a.js&#39;console.log(info.name);</code><img alt=16f6d666e45edb258bd4c72294fa2304.png src=en-resource://database/6048:1></ol>`
    }, {
        id: '2019040100011',
        title: '插槽 slot',
        category_id: '2019002',
        picture: '这里将要放一张照片',
        describe: '插槽 slot',
        content: `<h3>插槽 slot</h3><hr><h4>为什么使用插槽</h4><h5>solt翻译为插槽：</h5><ol><li>在生活中很多地方都有用插槽，电脑的USB插槽，插板中的电源插槽。<li>插槽的目的是让我们原来的设备具备更多的扩展性。<li>比如电脑的USB我们可以插入U盘、硬盘、手机、音响、键盘、鼠标等等。</ol><h5>组件的插槽：</h5><ol><li>组件的插槽也是为了让我们封装的组件更加具有扩展性<li>让使用者可以决定组件内部的一些内容到底展示什么</ol><h5>具名插槽</h5><p>命名<code>&lt;div&gt;&lt;slot name=&quot;left&quot;&gt;&lt;span&gt;左边&lt;/span&gt;&lt;/slot&gt;    &lt;slot name=&quot;center&quot;&gt;&lt;span&gt;中间&lt;/span&gt;&lt;/slot&gt;    &lt;slot name=&quot;right&quot;&gt;&lt;span&gt;右边&lt;/span&gt;&lt;/slot&gt;&lt;/div&gt;</code>使用<code>&lt;cpn&gt;    &lt;span slot=&quot;center&quot;&gt;标题&lt;/span&gt;&lt;/cpn&gt;</code></p><h5>作用域插槽</h5><p>父组件替换插槽的标签，但是内容由子组件提供</p><h6>一个需求：</h6><ol><li>子组件中包括一组数据，比如：<code>pLanguages:[&#39;JavaScript&#39;,&#39;Python&#39;,&#39;Go&#39;,&#39;C++&#39;]</code><li>需要在多个界面进行展示：<ul><li>某些界面是以水平方向展示的<li>某些界面是以列表形式展示的<li>某些界面直接展示一个数组</ul><li>内容在子组件中，希望父组件告诉我们如何展示：<ul><li>利用slot作用域插槽就可以了</ul></ol><p>【<strong>子组件</strong>】：<code>data () {    return {        pLanguages:  [&#39;JavaScript&#39;,&#39;Python&#39;,&#39;Go&#39;,&#39;C++&#39;]    } }</code><code>&lt;div&gt;    &lt;slot :data= &#39;pLanguages&#39;&gt;    &lt;slot&gt;&lt;/div&gt;</code>【<strong>父组件</strong>】：<code>// 目的是获取子组件中的pLanguages
        &lt;cpn&gt;
        // 该slots就是子组件中传过来的pLanguages
            &lt;template slot-scope=&#39;slots&#39;&gt;
            &lt;/template&gt;
        &lt;/cpn&gt;
        </code></p>`
    }, {
        id: '2019040100012',
        title: '组件化',
        category_id: '2019002',
        picture: '这里将要放一张照片',
        describe: '组件化',
        content: `<h3>组件化</h3><hr><h4>什么是组件化？</h4><ul><li>如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展<li>但如果，我们将一个页面拆分成一个个小的功能块。</ul><h4>Vue组件化思想</h4><h5>组件化是Vue.js中的重要思想</h5><ol><li>它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。<li>任何的应用都会被抽象成一颗组件树。</ol><h5>组件化思想的应用：</h5><ol><li>有了组件化的思想，我们在之后的开发中就要充分的利用它。<li>尽可能的将页面拆分成一个个小的、可复用的组件。<li>这样让我们的代码更加方便组织和管理，并且扩展性也更强。</ol><h5>注册组件的基本步骤</h5><h6>组件的使用分成三个步骤：</h6><ol><li>创建组件构造器。<code>// 调用Vue.extend()方法创建组件构造器
        const cpn = Vue.extend({
        template: &#39;&lt;div&gt;&lt;h2&gt;这是组件内容&lt;/h2&gt;&lt;/div&gt;&#39;
        });
        </code><li>调用<code>Vue.extend()</code>创建的是一个组件构造器<li>通常在创建组件构造器时，传入<code>template</code>代表我们自定义组件的模板。<li>该模板就是在使用到组件的地方，要现实的<code>HTML</code>代码。<li>事实上，这种写法在<code>Vue2.x</code>的文档中几乎已经看不到了，它会直接使用下面我们会讲到的语法糖，但是在很多资料还是会提到这种方式，而且这种方式是学习后面方式的基础。<li>注册组件。<code>// 调用Vue.component()方法注册组件
        Vue.component(&#39;my-cpn&#39;，cpn);
        </code><li>调用<code>Vue.component()</code>是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称。<li>所以需要传递两个参数：1、注册组件的标签名；2、组件构造器<li>使用组件。<code>// 在Vue实例的作用范围内使用组件
        </code><li>组件必须挂载在某个Vue实例下，否则它不会生效。</ol><h5>组件中的<code>data</code>为什么是函数</h5><p><code>data() {    return {        msg: &#39;提示&#39;’    }}</code></p><h6>假如组件中的<code>data</code>是对象</h6><p><code>data{    msg: &#39;我是一个组件&#39;}</code>该组件<code>data</code>是一个对象，所以我们如果在多个地方使用了该组件的话，<code>data</code>指向的都是同一个地址，同一个数据，所以我们又一处地方对<code>data</code>里的数据进行了修改，所有使用过该组件的数据就发生变化。</p><h6>假如组件中的data是函数</h6><p><code>data() {    return {        msg: &#39;我也是一个组件&#39;’    }}</code>该组件中的<code>data</code>是一个函数，并且该函数返回一个对象，我们多个地方使用组件的时候，该组件的<code>data</code>中的数据就会在内存中新开辟一个内存单元。所以我们对其中一个组件的数据修改了的话，改变的只是当前组件对应的内存空间中的内容。对其它组件的<code>data</code>数据无影响。</p><h6>进一步可以参考<code>js</code>中的函数</h6><p><code>// 是对象
        var obj = {
            name: &#39;coderly&#39;
        }
        function person() {
            return obj;
        }
        var person1 = person();
        var person2 = person();
        person1.name = &#39;ly&#39;;
        console.log(&#39;name:&#39; ，person2.name) // 输出name:ly
        // 是一个函数
        function person() {
            return {
              name: &#39;coderly&#39;
            }
        }
        var person1 = person();
        var person2 = person();
        person1.name = &#39;ly&#39;;
        console.log(&#39;name:&#39; ，person2.name) // 输出name:coderly
        </code>在这个例子中1. 第一个返回的是<code>obj</code>的地址，所以<code>person1</code>和<code>person2</code>指向的都是同一个地址，对其中一个进行修改时，所有指向该地址的内容都发生改变.2. 第二个返回的是新建的一个内存空间的地址，所以<code>person</code>函数调用了几次，就创建了多少个内存空间。它们之间互不影响。所以可以单独维护自己的信息。</p><h4>父子组件通信</h4><h5>如何进行父子组件间的通信呢？</h5><ol><li>通过props向子组件传递数据。<li>通过事件向父组件发送信息。</ol><h5>父组件向子组件传递数据（props）</h5><p>props的值有两种方式：- 字符串数组，数组中的字符串就是传递时的名称- 对象，对象可以设置传递时的类型，也可以设置默认值等。</p><ol><li>父组件中<code>&lt;cpn :product=&quot;item&quot;&gt;&lt;/cpn&gt;</code><li>子组件中<code>props: {
        product：{
            type: Object,
            default：movies,
            required: true
        },
        propA: Number,
        propB:{
            type: Number,
            default: 1000
        },
        // 类型是对象或者数组时，默认值必须是一个函数
        propC: {
            type: Object,
            default: function() {
                return { msg: &#39;hello&#39; };
            }
        }，
        propD：{
            validator( value ) {
            // 这个值必须匹配下列字符串中的一个
                return [&#39;success&#39;, &#39;warning&#39;,&#39;danger&#39;].indexof(value) !== -1
            }
        }}
        }
        </code></ol><h6>props中的驼峰标识</h6><p>使用驼峰命名的变量传递参数会出现问题<code>&lt;cpn :mCpn=&quot;product&quot;&gt;&lt;/cpn&gt;</code>子组件接收不到参数。但是可以使用<code>-</code>连接的变量传递参数<code>&lt;cpn :m-cpn=&quot;product&quot;&gt;&lt;/cpn&gt;</code>子组件中才可以用驼峰命名的参数接收传递过来的数据：<code>props: {    mCpn: {        type: Object,        default(){            return {}        }}</code></p><h5>子组件向父组件传递数据（自定义事件）</h5><p>自定义事件的流程：- 在子组件中，通过$emit()来触发事件- 在父组件中，通过v-on来监听子组件事件</p><ol><li>子组件：<code>props: [ &#39;cpn&#39; ]
        methods:{
        handclick(item) {
        // 发射事件：自定义事件
            this.$emit(&#39;itemclick&#39;,item)
        }
        }
        </code><code>&lt;li @click=&quot;handclick&quot;&gt;&lt;/li&gt;</code><li>父组件<code>&lt;cpn :cpn=&quot;product&quot; :itemclick=&#39;parentClick&#39;&gt;&lt;/cpn&gt;</code><code>methods: {parentclick(item){    console.log(item)}}</code></ol><h5>父组件传递过来的值，子组件不要自接随便修改。</h5><h4>父访问子 - $children - $refs</h4><h5><code>this.$children</code>是一个数组类型，它包含所有子组件对象。</h5><p>获取到的是数组。</p><h5>$refs</h5><p>用的比较多，获取的是一个对象类型，默认是空对象</p><h4>子访问父 - $parent</h4><p><code>this.$parent</code></p><h5>访问根组件 - $root</h5><p><code>this.$root</code></p>`
    }
]
module.exports = function () {
    try {
        articleModel.collection.insert(initarticle, (err, data) => {
            if (!err) {
                console.log('文章初始化完成')
            } else {
                console.log(err)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
