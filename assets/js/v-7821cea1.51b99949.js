"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[133],{2180:(n,e,a)=>{a.r(e),a.d(e,{data:()=>t});const t={key:"v-7821cea1",path:"/docs/debug.html",title:"Debug & Monitoring",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Monitoring endpoint",slug:"monitoring-endpoint",children:[]},{level:2,title:"Debugging AKHQ performance issues",slug:"debugging-akhq-performance-issues",children:[]},{level:2,title:"Debugging authentication",slug:"debugging-authentication",children:[]}],filePathRelative:"docs/debug.md",git:{updatedTime:1638650034e3,contributors:[{name:"Julien Chanaud",email:"chanaud.julien@gmail.com",commits:1}]}}},2293:(n,e,a)=>{a.r(e),a.d(e,{default:()=>A});var t=a(6252);const s=(0,t._)("h1",{id:"debug-monitoring",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#debug-monitoring","aria-hidden":"true"},"#"),(0,t.Uk)(" Debug & Monitoring")],-1),o=(0,t._)("h2",{id:"monitoring-endpoint",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#monitoring-endpoint","aria-hidden":"true"},"#"),(0,t.Uk)(" Monitoring endpoint")],-1),i=(0,t._)("p",null,[(0,t.Uk)("Several monitoring endpoint is enabled by default and available on port "),(0,t._)("code",null,"28081"),(0,t.Uk)(" only.")],-1),r=(0,t._)("p",null,"You can disable it, change the port or restrict access only for authenticated users following micronaut configuration below.",-1),l=(0,t._)("code",null,"/info",-1),u=(0,t.Uk)(),c={href:"https://docs.micronaut.io/snapshot/guide/index.html#infoEndpoint",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("Info Endpoint"),d=(0,t.Uk)(" with git status information."),g=(0,t._)("code",null,"/health",-1),h=(0,t.Uk)(),b={href:"https://docs.micronaut.io/snapshot/guide/index.html#healthEndpoint",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("Health Endpoint"),k=(0,t._)("code",null,"/loggers",-1),f=(0,t.Uk)(),_={href:"https://docs.micronaut.io/snapshot/guide/index.html#loggersEndpoint",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("Loggers Endpoint"),v=(0,t._)("code",null,"/metrics",-1),U=(0,t.Uk)(),E={href:"https://docs.micronaut.io/snapshot/guide/index.html#metricsEndpoint",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Uk)("Metrics Endpoint"),y=(0,t._)("code",null,"/prometheus",-1),T=(0,t.Uk)(),C={href:"https://micronaut-projects.github.io/micronaut-micrometer/latest/guide/",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("Prometheus Endpoint"),H=(0,t.uE)('<h2 id="debugging-akhq-performance-issues" tabindex="-1"><a class="header-anchor" href="#debugging-akhq-performance-issues" aria-hidden="true">#</a> Debugging AKHQ performance issues</h2><p>You can debug all query duration from AKHQ with this commands</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -i -X POST -H <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span>\n       -d <span class="token string">&#39;{ &quot;configuredLevel&quot;: &quot;TRACE&quot; }&#39;</span> <span class="token punctuation">\\</span>\n       http://localhost:28081/loggers/org.akhq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="debugging-authentication" tabindex="-1"><a class="header-anchor" href="#debugging-authentication" aria-hidden="true">#</a> Debugging authentication</h2><p>Debugging auth can be done by increasing log level on Micronaut that handle most of the authentication part :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -i -X POST -H <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span>\n       -d <span class="token string">&#39;{ &quot;configuredLevel&quot;: &quot;TRACE&quot; }&#39;</span> <span class="token punctuation">\\</span>\n       http://localhost:28081/loggers/io.micronaut.security\n\n\n<span class="token function">curl</span> -i -X POST -H <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span>\n       -d <span class="token string">&#39;{ &quot;configuredLevel&quot;: &quot;TRACE&quot; }&#39;</span> <span class="token punctuation">\\</span>\n       http://localhost:28081/loggers/org.akhq.configs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',6),w={},A=(0,a(3744).Z)(w,[["render",function(n,e){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,o,i,r,(0,t._)("ul",null,[(0,t._)("li",null,[l,u,(0,t._)("a",c,[p,(0,t.Wm)(a)]),d]),(0,t._)("li",null,[g,h,(0,t._)("a",b,[m,(0,t.Wm)(a)])]),(0,t._)("li",null,[k,f,(0,t._)("a",_,[q,(0,t.Wm)(a)])]),(0,t._)("li",null,[v,U,(0,t._)("a",E,[x,(0,t.Wm)(a)])]),(0,t._)("li",null,[y,T,(0,t._)("a",C,[D,(0,t.Wm)(a)])])]),H],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[a,t]of e)n[a]=t;return n}}}]);