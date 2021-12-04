"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86],{3285:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-6b377f67",path:"/docs/configuration/authentifications/basic-auth.html",title:"Basic Auth",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/basic-auth.md",git:{updatedTime:1638650034e3,contributors:[{name:"Julien Chanaud",email:"chanaud.julien@gmail.com",commits:1}]}}},7377:(s,a,n)=>{n.r(a),n.d(a,{default:()=>o});const e=(0,n(6252).uE)('<h1 id="basic-auth" tabindex="-1"><a class="header-anchor" href="#basic-auth" aria-hidden="true">#</a> Basic Auth</h1><ul><li><code>akhq.security.basic-auth</code>: List user &amp; password with affected roles <ul><li><code>- username: actual-username</code>: Login of the current user as (maybe anything email, login, ...) <ul><li><code>password</code>: Password in sha256 (default) or bcrypt. The password can be converted <ul><li>For default SHA256, with command <code>echo -n &quot;password&quot; | sha256sum</code> or Ansible filter <code>{{ &#39;password&#39; | hash(&#39;sha256&#39;) }}</code></li><li>For BCrypt, with Ansible filter <code>{{ &#39;password&#39; | password_hash(&#39;blowfish&#39;) }}</code></li></ul></li><li><code>passwordHash</code>: Password hashing algorithm, either <code>SHA256</code> or <code>BCRYPT</code></li><li><code>groups</code>: Groups for current user</li></ul></li></ul></li></ul><p>Configure basic-auth connection in AKHQ</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">akhq.security</span><span class="token punctuation">:</span>\n  <span class="token key atrule">basic-auth</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> admin\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;$2a$&lt;hashed password&gt;&quot;</span>\n      <span class="token key atrule">passwordHash</span><span class="token punctuation">:</span> BCRYPT\n      <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> admin\n    <span class="token punctuation">-</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> reader\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;SHA-256 hashed password&gt;&quot;</span>\n      <span class="token key atrule">groups</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> reader\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',4),t={},o=(0,n(3744).Z)(t,[["render",function(s,a){return e}]])},3744:(s,a)=>{a.Z=(s,a)=>{for(const[n,e]of a)s[n]=e;return s}}}]);