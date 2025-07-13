import{_ as n,c as a,b as e,o as l}from"./app-CkPgLnmy.js";const p={};function i(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="git-immersion-学习" tabindex="-1"><a class="header-anchor" href="#git-immersion-学习"><span>Git Immersion 学习</span></a></h1><p><a href="https://gitimmersion.com/index.html" target="_blank" rel="noopener noreferrer">教程连接</a></p><h2 id="_1-设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#_1-设置用户名和邮箱"><span>1 设置用户名和邮箱</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 设置用户名为 mgkl92</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;mgkl92&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置邮箱为 zst_lff@126.com</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;zst_lff@126.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建一个项目" tabindex="-1"><a class="header-anchor" href="#_3-创建一个项目"><span>3 创建一个项目</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 初始当前目录为 git 项目</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Initialized empty Git repository <span class="token keyword">in</span> /home/mgkl/Desktop/git_tutorial/hello/.git/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">// 添加 hello.rb 文件到暂存区</span></span>
<span class="line">git add hello<span class="token punctuation">.</span>rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token comment">// 进行一次提交</span></span>
<span class="line">git commit <span class="token operator">-</span>m <span class="token string">&quot;First Commit&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span> <span class="token expression">Output</span></span></span>
<span class="line"><span class="token punctuation">[</span><span class="token function">master</span> <span class="token punctuation">(</span>root<span class="token operator">-</span>commit<span class="token punctuation">)</span> <span class="token number">296786</span>b<span class="token punctuation">]</span> First Commit</span>
<span class="line"> <span class="token number">1</span> file changed<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token function">insertion</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span></span>
<span class="line"> create mode <span class="token number">100644</span> hello<span class="token punctuation">.</span>rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-检查仓库状态" tabindex="-1"><a class="header-anchor" href="#_4-检查仓库状态"><span>4 检查仓库状态</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查仓库当前状态</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">nothing to commit, working tree clean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文件变更" tabindex="-1"><a class="header-anchor" href="#_5-文件变更"><span>5 文件变更</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将 hello.rb 内容修改为</span></span>
<span class="line">puts <span class="token string">&quot;Hello, #{ARGV.first}!&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查修改 hello.rb 内容后仓库的状态</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes not staged <span class="token keyword">for</span> commit:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line">no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-暂存变更" tabindex="-1"><a class="header-anchor" href="#_6-暂存变更"><span>6 暂存变更</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将对 hello.rb 的修改添加到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查将 hello.rb 添加到暂存区后的仓库状态</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-提交变更" tabindex="-1"><a class="header-anchor" href="#_8-提交变更"><span>8 提交变更</span></a></h2><p>使用无参的 <code>git commit</code> 命令会交互的弹出默认的文本编辑器，可以添加任意对本次提交内容的注释。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">Using ARGV</span>
<span class="line"><span class="token comment"># Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span class="token comment"># with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span class="token comment"># On branch master</span></span>
<span class="line"><span class="token comment"># Changes to be committed:</span></span>
<span class="line"><span class="token comment">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment">#	modified:   hello.rb</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 提交对 hello.rb 的变更</span></span>
<span class="line"><span class="token function">git</span> commit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token punctuation">[</span>master 55b8500<span class="token punctuation">]</span> Using ARGV</span>
<span class="line"> <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-暂存与提交分离的哲学" tabindex="-1"><a class="header-anchor" href="#_7-暂存与提交分离的哲学"><span>7 暂存与提交分离的哲学</span></a></h2><p>额外的暂存过程允许我们能够仅在必要的时候进行源控制，这使得我们可以持续的变更我们工作目录中的内容。</p><p>现在假设我们有三个文件 a.rb, b.rb, c.rb，其中 a.rb, b.rb 内容相关，而 c.rb 与其它两个文件逻辑无关。因此，我们可以先提交对 a.rb 和 b.rb 内容修改；然后，再提交对 c.rb 内容的修改。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 提交 a.rb 以及 b.rb</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> a.rb </span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> b.rb</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Changes for a and b&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交 c.rb</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> c.rb</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Unrelated change to c&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-变更并非文件" tabindex="-1"><a class="header-anchor" href="#_9-变更并非文件"><span>9 变更并非文件</span></a></h2><p>Git 聚焦于文件的变更而非文件本身，当你使用 <code>git add file</code> 命令时，并非告知 git 将该文件添加到仓库，而是令 git 关注该将要提交文件的当前状态。</p><p>首先，假设我们对 hello.rb 作如下变更：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># hello.rb</span></span>
<span class="line">name <span class="token operator">=</span> ARGV.first <span class="token operator">||</span> <span class="token string">&quot;World&quot;</span></span>
<span class="line"></span>
<span class="line">puts <span class="token string">&quot;Hello, #{name}!&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将变更添加到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们再次对 hello.rb 作如下变更：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># hello.rb</span></span>
<span class="line"><span class="token comment"># Default is &quot;World&quot;</span></span>
<span class="line">name <span class="token operator">=</span> ARGV.first <span class="token operator">||</span> <span class="token string">&quot;World&quot;</span></span>
<span class="line"></span>
<span class="line">puts <span class="token string">&quot;Hello, #{name}!&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查仓库的当前状态</span></span>
<span class="line"><span class="token function">git</span> status </span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line">Changes not staged <span class="token keyword">for</span> commit:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们可以</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line">Changes not staged <span class="token keyword">for</span> commit:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，hello.rb 出现了两次：第一次出现的 hello.rb 会进入下一次提交，而未进入暂存区的 hello.rb 并不会进入下一次提交。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 提交第一次出现的 hello.rb</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Added a default value&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查提交后的仓库状态</span></span>
<span class="line"><span class="token function">git</span> status</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes not staged <span class="token keyword">for</span> commit:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line">no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 暂存第二次出现的 hello.rb，然后提交</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Added a comment&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-提交历史" tabindex="-1"><a class="header-anchor" href="#_10-提交历史"><span>10 提交历史</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 列出当前仓库的已提交的记录</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">commit 034d418e709579f1b8142fef8dcb07ff577aea1f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span></span>
<span class="line">Author: mgkl92 <span class="token operator">&lt;</span>zst_lff@126.com<span class="token operator">&gt;</span></span>
<span class="line">Date:   Mon May <span class="token number">5</span> <span class="token number">21</span>:15:52 <span class="token number">2025</span> +0800</span>
<span class="line"></span>
<span class="line">    Added a comment</span>
<span class="line"></span>
<span class="line">commit 2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9</span>
<span class="line">Author: mgkl92 <span class="token operator">&lt;</span>zst_lff@126.com<span class="token operator">&gt;</span></span>
<span class="line">Date:   Mon May <span class="token number">5</span> <span class="token number">21</span>:12:50 <span class="token number">2025</span> +0800</span>
<span class="line">Author: mgkl92 <span class="token operator">&lt;</span>zst_lff@126.com<span class="token operator">&gt;</span></span>
<span class="line">Date:   Mon May <span class="token number">5</span> <span class="token number">20</span>:54:06 <span class="token number">2025</span> +0800</span>
<span class="line"></span>
<span class="line">    Changes <span class="token keyword">for</span> a and b</span>
<span class="line"></span>
<span class="line">commit 55b85002f786a071843ce716802db761d356d314</span>
<span class="line">Author: mgkl92 <span class="token operator">&lt;</span>zst_lff@126.com<span class="token operator">&gt;</span></span>
<span class="line">Date:   Mon May <span class="token number">5</span> <span class="token number">20</span>:29:14 <span class="token number">2025</span> +0800</span>
<span class="line"></span>
<span class="line">    Using ARGV</span>
<span class="line"></span>
<span class="line">commit 296786b086af9ae96882b7ae65d01c50508bdd54</span>
<span class="line">Author: mgkl92 <span class="token operator">&lt;</span>zst_lff@126.com<span class="token operator">&gt;</span></span>
<span class="line">Date:   Mon May <span class="token number">5</span> <span class="token number">20</span>:13:33 <span class="token number">2025</span> +0800</span>
<span class="line"></span>
<span class="line">    First Commit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 一行历史</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">034d418e709579f1b8142fef8dcb07ff577aea1f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Added a comment</span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9 Added a default value</span>
<span class="line">de82ecc3201206c8690d9a71301f0e9c91f67940 Unrelated change to c</span>
<span class="line">74cf2db98a4b2b11866fe967701f01ea3abad9cb Changes <span class="token keyword">for</span> a and b</span>
<span class="line">55b85002f786a071843ce716802db761d356d314 Using ARGV</span>
<span class="line">296786b086af9ae96882b7ae65d01c50508bdd54 First Commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>控制历史输出记录</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 最多输出两条提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --max-count<span class="token operator">=</span><span class="token number">2</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">034d418e709579f1b8142fef8dcb07ff577aea1f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Added a comment</span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9 Added a default value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出五分钟内的提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&#39;5 minutes ago&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出五分钟前的提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--until</span><span class="token operator">=</span><span class="token string">&#39;5 minutes ago&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">034d418e709579f1b8142fef8dcb07ff577aea1f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Added a comment</span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9 Added a default value</span>
<span class="line">de82ecc3201206c8690d9a71301f0e9c91f67940 Unrelated change to c</span>
<span class="line">74cf2db98a4b2b11866fe967701f01ea3abad9cb Changes <span class="token keyword">for</span> a and b</span>
<span class="line">55b85002f786a071843ce716802db761d356d314 Using ARGV</span>
<span class="line">296786b086af9ae96882b7ae65d01c50508bdd54 First Commit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出指定用户的提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--author</span><span class="token operator">=</span>mgkl92</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">034d418e709579f1b8142fef8dcb07ff577aea1f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> Added a comment</span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9 Added a default value</span>
<span class="line">de82ecc3201206c8690d9a71301f0e9c91f67940 Unrelated change to c</span>
<span class="line">74cf2db98a4b2b11866fe967701f01ea3abad9cb Changes <span class="token keyword">for</span> a and b</span>
<span class="line">55b85002f786a071843ce716802db761d356d314 Using ARGV</span>
<span class="line">296786b086af9ae96882b7ae65d01c50508bdd54 First Commit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 输出所有提交记录</span></span>
<span class="line"><span class="token comment"># 默认，git log 仅输出当前分支上的提交记录</span></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline <span class="token parameter variable">--all</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>推荐输出格式</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&#39;%h %ad | %s%d [%an]&#39;</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--date</span><span class="token operator">=</span>short</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 符号解释</span></span>
<span class="line"><span class="token comment"># %h 提交记录的哈希值</span></span>
<span class="line"><span class="token comment"># %d 提交记录的装饰（分支或者标签）</span></span>
<span class="line"><span class="token comment"># %ad 记录提交日期</span></span>
<span class="line"><span class="token comment"># %an 记录提交用户</span></span>
<span class="line"><span class="token comment"># %s 提交记录注释</span></span>
<span class="line"><span class="token comment"># --graph</span></span>
<span class="line"><span class="token comment"># --date=short</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-命令别名" tabindex="-1"><a class="header-anchor" href="#_11-命令别名"><span>11 命令别名</span></a></h2><p>Git 别名允许我们为常用命令提供缩写。</p><p>以 Linux 操作系统为例，我们可以在 $HOME 目录下的 .gitconfig 文件添加如下内容：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token punctuation">[</span>alias<span class="token punctuation">]</span></span>
<span class="line">  co <span class="token operator">=</span> checkout</span>
<span class="line">  ci <span class="token operator">=</span> commit</span>
<span class="line">  st <span class="token operator">=</span> status</span>
<span class="line">  br <span class="token operator">=</span> branch</span>
<span class="line">  hist <span class="token operator">=</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&#39;%h %ad | %s%d [%an]&#39;</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--date</span><span class="token operator">=</span>short</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-获取旧版本" tabindex="-1"><a class="header-anchor" href="#_12-获取旧版本"><span>12 获取旧版本</span></a></h2><p>我们可以根据提交记录的哈希值，将文件切换到旧版本。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看提交记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到旧版本</span></span>
<span class="line"><span class="token comment"># 进入分离头状态</span></span>
<span class="line"><span class="token function">git</span> checkout 2c1e42d</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Note: checking out <span class="token string">&#39;2c1e42d&#39;</span><span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line">You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental</span>
<span class="line">changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this</span>
<span class="line">state without impacting any branches by performing another checkout.</span>
<span class="line"></span>
<span class="line">If you want to create a new branch to retain commits you create, you may</span>
<span class="line"><span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-b</span> with the checkout <span class="token builtin class-name">command</span> again. Example:</span>
<span class="line"></span>
<span class="line">  <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">HEAD is now at 2c1e42d Added a default value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 对比使用和不使用 --all 选项 git log 的输出</span></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">(</span>master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到 master 分支的最新版本</span></span>
<span class="line"><span class="token function">git</span> checkout master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分离头指针</strong></p><p>默认情况，Git 使用 HEAD 指针记录当前所处分支的最新提交记录；而当你检出某一个提交记录时，HEAD 指针会指向该提交记录，不再指向任何具体的分支。非分离头状态下，HEAD 指针不是指向就是 master 分支就是指向 dev 分支；但 Git 允许你检出到 dev 分支独有的提交记录 commit4 上，也允许你检出到 master 分支和 dev 分支的公共提交记录 commit2 上（从指向 commit2 更有助于我们理解分离头状态）。</p><h2 id="_13-标记版本" tabindex="-1"><a class="header-anchor" href="#_13-标记版本"><span>13 标记版本</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 为当前提交记录添加标签 v1</span></span>
<span class="line"><span class="token function">git</span> tag v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD, tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过标签 v1 检出提交记录</span></span>
<span class="line"><span class="token function">git</span> tag v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Note: checking out <span class="token string">&#39;v1&#39;</span><span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line">You are <span class="token keyword">in</span> <span class="token string">&#39;detached HEAD&#39;</span> state. You can <span class="token function">look</span> around, <span class="token function">make</span> experimental</span>
<span class="line">changes and commit them, and you can discard any commits you <span class="token function">make</span> <span class="token keyword">in</span> this</span>
<span class="line">state without impacting any branches by performing another checkout.</span>
<span class="line"></span>
<span class="line">If you want to create a new branch to retain commits you create, you may</span>
<span class="line"><span class="token keyword">do</span> so <span class="token punctuation">(</span>now or later<span class="token punctuation">)</span> by using <span class="token parameter variable">-b</span> with the checkout <span class="token builtin class-name">command</span> again. Example:</span>
<span class="line"></span>
<span class="line">  <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">HEAD is now at 2c1e42d Added a default value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检视已有标签</span></span>
<span class="line"><span class="token function">git</span> tag</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">v1</span>
<span class="line">v1-beta</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_14-撤销本地变更-暂存前" tabindex="-1"><a class="header-anchor" href="#_14-撤销本地变更-暂存前"><span>14 撤销本地变更（暂存前）</span></a></h1><p>现在假设我们对 hello.rb 文件有如下更改尚未添加到暂存区：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># This is a bad comment. We want to revert it.</span>
<span class="line"># Default is &quot;World&quot;</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查当前仓库状态</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes not staged <span class="token keyword">for</span> commit:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line">no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检出当前分支上的 hello.rb</span></span>
<span class="line"><span class="token function">git</span> checkout hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查当前仓库状态</span></span>
<span class="line">On branch master</span>
<span class="line">nothing to commit, working tree clean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检出某个文件为当前提交记录中的版本，这会使得我们在工作区中对该文件尚未添加至暂存区的修改丢失！ 所以，现在 hello.rb 文中的内容如下：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># Default is &quot;World&quot;</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-撤销暂存区中的修改-提交前" tabindex="-1"><a class="header-anchor" href="#_15-撤销暂存区中的修改-提交前"><span>15 撤销暂存区中的修改（提交前）</span></a></h1><p>现在假设，我们对 hello.rb 有如下修改且已添加至暂存区：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># This is an unwanted but staged comment</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查当前仓库状态</span></span>
<span class="line"><span class="token function">git</span> st</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        modified:   hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复位暂存区</span></span>
<span class="line"><span class="token function">git</span> reset HEAD hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Unstaged changes after reset:</span>
<span class="line">M       hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 git reset 命令并不会像使用 git checkout 命令那样导致我们工作区中对文件的变更。 这也就是说，我们的 hello.rb 文件的内容如下：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># This is an unwanted but staged comment</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但值得注意的是，当使用 git checkout 命令检出文件时并不会影响我们已经添加到暂存区中的内容；而且当你将修改添加到暂存区后，使用再进行检出操作，此时并不会影响已提交至暂存区中的变更（与暂存区中的内容保持一致）。</p><h1 id="_16-撤销提交记录" tabindex="-1"><a class="header-anchor" href="#_16-撤销提交记录"><span>16 撤销提交记录</span></a></h1><p>现在假设，我们对 hello.rb 进行了如下修改并进行了提交：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># This is an unwanted but committed change</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* acb82a9 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Oops, we didn&#39;t want this commit <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建撤销提交</span></span>
<span class="line"><span class="token function">git</span> revert HEAD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line">* 446e8e4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Revert <span class="token string">&quot;Oops, we didn&#39;t want this commit&quot;</span> <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* acb82a9 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Oops, we didn&#39;t want this commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用 git revert HEAD 命令撤销当前的提交记录，但 Git 并不会从提交历史中移除相应提交，而是引入了一个新的撤销提交。</p><h1 id="_17-移除分支中的提交" tabindex="-1"><a class="header-anchor" href="#_17-移除分支中的提交"><span>17 移除分支中的提交</span></a></h1><p>假设我们现在对哈希值 acb82a9 的提交记录添加了 oops 标签。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 446e8e4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Revert <span class="token string">&quot;Oops, we didn&#39;t want this commit&quot;</span> <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* acb82a9 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Oops, we didn&#39;t want this commit <span class="token punctuation">(</span>tag: oops<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 移除 master 分支中 v1 标签后面的提交记录</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">HEAD is now at 2c1e42d Added a default value</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从历史记录中，我们可以看出 master 指针和 HEAD 指针指向了标签 v1 所在的提交记录，但实际仍可以引用到使用 oops 标签的提交记录。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查所有历史记录</span></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output </span></span>
<span class="line">* acb82a9 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Oops, we didn&#39;t want this commit <span class="token punctuation">(</span>tag: oops<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 034d418 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 删除 oops 标签</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> oops</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Deleted tag <span class="token string">&#39;oops&#39;</span> <span class="token punctuation">(</span>was acb82a9<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查所有历史记录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output </span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，当我们使用 git tag -d 命令删除 oops 标签后，我们无法再通过任何指针获取该记录的引用。</p><h1 id="_19-修改提交" tabindex="-1"><a class="header-anchor" href="#_19-修改提交"><span>19 修改提交</span></a></h1><p>现在假设，我们对 hello.rb 进行了如下修改且已提交：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># Default is World</span>
<span class="line"># Author: Jim Weirich</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 8135b6e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author comment <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们想要再添加一条邮箱的注释如下：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># Default is World</span>
<span class="line"># Author: mgkl</span>
<span class="line"># Email: zst_lff</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我们并不想再产生一条新的提交记录。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将对 hello.rb 的变更添加到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改先前的提交内容</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;Add an author/email comment&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>庆幸的是，使用 git commit --amend 命令能够让我们将本次提交与上次提交进行合并。</p><h1 id="_20-移动文件" tabindex="-1"><a class="header-anchor" href="#_20-移动文件"><span>20 移动文件</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">mkdir</span> lib</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将 hello.rb 移动到 lib 目录中</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">mv</span> hello.rb lib</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查仓库状态</span></span>
<span class="line"><span class="token function">git</span> st</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        renamed:    hello.rb -<span class="token operator">&gt;</span> lib/hello.rb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># git mv 命令的等价操作</span></span>
<span class="line"><span class="token function">mv</span> hello.rb lib</span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> lib/hello.rb</span>
<span class="line"><span class="token function">git</span> <span class="token function">rm</span> hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查仓库状态</span></span>
<span class="line">On branch master</span>
<span class="line">Changes to be committed:</span>
<span class="line">  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        renamed:    hello.rb -<span class="token operator">&gt;</span> lib/hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交记录</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Moved hello.rb to lib&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token punctuation">[</span>master aecacc4<span class="token punctuation">]</span> Moved hello.rb to lib</span>
<span class="line"> <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span></span>
<span class="line"> <span class="token function">rename</span> hello.rb <span class="token operator">=</span><span class="token operator">&gt;</span> lib/hello.rb <span class="token punctuation">(</span><span class="token number">100</span>%<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_22-git-内部原理之-git-目录" tabindex="-1"><a class="header-anchor" href="#_22-git-内部原理之-git-目录"><span>22 Git 内部原理之 .git 目录</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># .git 的目录结构</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-C</span> .git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">branches  COMMIT_EDITMSG  config  description  FETCH_HEAD  HEAD  hooks  index  info  logs  objects  ORIG_HEAD  refs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 将对象使用 sha1 算法计算的哈希值的前两位作为目录名称。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Git 对象（Object）存储</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-C</span> .git/objects</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">03  0b  0d  <span class="token number">11</span>  <span class="token number">20</span>  <span class="token number">25</span>  <span class="token number">27</span>  <span class="token number">28</span>  <span class="token number">29</span>  2c  <span class="token number">32</span>  3d  <span class="token number">43</span>  <span class="token number">44</span>  <span class="token number">48</span>  <span class="token number">55</span>  <span class="token number">59</span>  6b  <span class="token number">74</span>  <span class="token number">81</span>  <span class="token number">97</span>  9c  a0  ac  ae  af  ba  ce  <span class="token function">dc</span>  de  e6  e7  f8  info  pack</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 深入探究 objects 子目录</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-C</span> .git/objects/03</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">4d418e709579f1b8142fef8dcb07ff577aea1f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 仓库中的 config 文件存储了当前仓库相关的配置。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看配置文件内容</span></span>
<span class="line"><span class="token function">cat</span> .git/config</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token punctuation">[</span>core<span class="token punctuation">]</span></span>
<span class="line">        repositoryformatversion <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        filemode <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">        bare <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">        logallrefupdates <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">ls</span> .git/refs </span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">heads  tags</span>
<span class="line"></span>
<span class="line"><span class="token function">ls</span> .git/refs/heads</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">master</span>
<span class="line"></span>
<span class="line"><span class="token function">ls</span> .git/refs/tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Ouput</span></span>
<span class="line">v1  v1-beta</span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> .git/refs/tags/v1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HEAD 文件用于追踪 HEAD 指针指向的记录。</p><p>默认，HEAD 指向当前分支的最新提交记录；但你可以使用 git checkout 命令来切换 HEAD 指向的提交记录。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">cat</span> .git/HEAD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">ref: refs/heads/master</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> checkout v1</span>
<span class="line"></span>
<span class="line"><span class="token function">cat</span> .git/HEAD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">2c1e42dc3788479fb042d149fc97c9c1c5bf9ea9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_23-git-内部原理之直接操纵-git-对象" tabindex="-1"><a class="header-anchor" href="#_23-git-内部原理之直接操纵-git-对象"><span>23 Git 内部原理之直接操纵 Git 对象</span></a></h1><p><a href="https://gitimmersion.com/lab_23.html" target="_blank" rel="noopener noreferrer">原文连接</a></p><ul><li>[ ] 待补充</li></ul><h1 id="_24-创建分支" tabindex="-1"><a class="header-anchor" href="#_24-创建分支"><span>24 创建分支</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建并切换到 greet 分支</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> greet</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Switched to a new branch <span class="token string">&#39;greet&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查仓库状态</span></span>
<span class="line"><span class="token function">git</span> st</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">On branch greet</span>
<span class="line">nothing to commit, working tree clean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在假设, 我们在 greet 分支创建了如下 lib/greeter.rb 文件并已提交:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">class Greeter</span>
<span class="line">  def initialize(who)</span>
<span class="line">    @who = who</span>
<span class="line">  end</span>
<span class="line">  def greet</span>
<span class="line">    &quot;Hello, #{@who}&quot;</span>
<span class="line">  end</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在, 我们对 lib/hello.rb 文件作如下修改并提交:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">require &#39;greeter&#39;</span>
<span class="line"></span>
<span class="line"># Default is World</span>
<span class="line"># Author: mgkl</span>
<span class="line"># Email: zst_lff</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">greeter = Greeter.new(name)</span>
<span class="line">puts greeter.greet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在, 我们对 Rakefile 文件作如下修改并提交:</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">#!/usr/bin/ruby -wKU</span>
<span class="line"></span>
<span class="line">task :default =&gt; :run</span>
<span class="line"></span>
<span class="line">task :run do</span>
<span class="line">  ruby &#39;-Ilib&#39;, &#39;lib/hello.rb&#39;</span>
<span class="line">end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们已经在 greet 分支上进行了三次提交。</p><p>现在，我们在 master 分支上创建了如下 README 文件并已提交。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">This is the Hello World example from the <span class="token function">git</span> tutorial.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_25-切换分支" tabindex="-1"><a class="header-anchor" href="#_25-切换分支"><span>25 切换分支</span></a></h2><p>使用 git branch 命令允许我们进行分支切换。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 切换到 master 分支</span></span>
<span class="line"><span class="token function">git</span> checkout master</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Switched to branch <span class="token string">&#39;master&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到 greet 分支</span></span>
<span class="line"><span class="token function">git</span> checkout greet</span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Switched to branch <span class="token string">&#39;greet&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切回分支</span></span>
<span class="line"><span class="token function">git</span> checkout -</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Switched to branch <span class="token string">&#39;master&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_28-合并分支" tabindex="-1"><a class="header-anchor" href="#_28-合并分支"><span>28 合并分支</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 检视所有分支上的提交记录</span></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* 8a9c07e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added README <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 9025f0a <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Updated Rakefile <span class="token punctuation">(</span>greet<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 366bd33 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Hello uses Greeter <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 35f07c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added greeter class <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span>/  </span>
<span class="line">* 0d15d6c <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added a Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* aecacc4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Moved hello.rb to lib <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，让我们切换到 greet 分支并将 master 分支合并到 greet。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 合并 master 分支</span></span>
<span class="line"><span class="token function">git</span> merge master</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Merge made by the <span class="token string">&#39;recursive&#39;</span> strategy.</span>
<span class="line"> README <span class="token operator">|</span> <span class="token number">1</span> +</span>
<span class="line"> <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span></span>
<span class="line"> create mode <span class="token number">100644</span> README</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看历史记录</span></span>
<span class="line"><span class="token function">git</span> hist</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">*   d52de78 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merge branch <span class="token string">&#39;master&#39;</span> into greet <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> greet<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span><span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> * 8a9c07e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added README <span class="token punctuation">(</span>master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 9025f0a <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Updated Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 366bd33 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Hello uses Greeter <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 35f07c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added greeter class <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span>/  </span>
<span class="line">* 0d15d6c <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added a Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* aecacc4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Moved hello.rb to lib <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_29-创建冲突" tabindex="-1"><a class="header-anchor" href="#_29-创建冲突"><span>29 创建冲突</span></a></h1><p>现在，我们在 master 分支上修改 lib/hello.rb 的内容如下并提交：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line"># Default is World</span>
<span class="line"># Author: mgkl</span>
<span class="line"># Email: zst_lff</span>
<span class="line">puts &quot;What&#39;s your name?&quot;</span>
<span class="line">my_name = gets.strip</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{my_name}!&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看所有分支上的提交记录</span></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* b992e23 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Made interactive <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> *   d52de78 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merge branch <span class="token string">&#39;master&#39;</span> into greet <span class="token punctuation">(</span>greet<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> <span class="token operator">|</span><span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> <span class="token operator">|</span>/  </span>
<span class="line"><span class="token operator">|</span>/<span class="token operator">|</span>   </span>
<span class="line">* <span class="token operator">|</span> 8a9c07e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added README <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 9025f0a <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Updated Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 366bd33 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Hello uses Greeter <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span> * 35f07c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added greeter class <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span>/  </span>
<span class="line">* 0d15d6c <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added a Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* aecacc4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Moved hello.rb to lib <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_30-解决冲突" tabindex="-1"><a class="header-anchor" href="#_30-解决冲突"><span>30 解决冲突</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 尝试将 master 分支合并到 greet 分支</span></span>
<span class="line"><span class="token function">git</span> merge master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，因为我们同时在 master 分支和 branch 分支的 lib/hello.rb 中的同一位置进行了修改；所以，上述合并将需要我们手动解决两个文件中的冲突内容，大致如下：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
<span class="line">require &#39;greeter&#39;</span>
<span class="line"></span>
<span class="line"># Default is World</span>
<span class="line">name = ARGV.first || &quot;World&quot;</span>
<span class="line"></span>
<span class="line">greeter = Greeter.new(name)</span>
<span class="line">puts greeter.greet</span>
<span class="line">=======</span>
<span class="line"># Default is World</span>
<span class="line"></span>
<span class="line">puts &quot;What&#39;s your name&quot;</span>
<span class="line">my_name = gets.strip</span>
<span class="line"></span>
<span class="line">puts &quot;Hello, #{my_name}!&quot;</span>
<span class="line">&gt;&gt;&gt;&gt;&gt;&gt;&gt; main</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将手动解决冲突后的文件添加到暂存区</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> lib/hello.rb</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 提交解决冲突后的合并记录</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Merged master fixed conflict&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_31-变基-rebasing-与合并-merging" tabindex="-1"><a class="header-anchor" href="#_31-变基-rebasing-与合并-merging"><span>31 变基（Rebasing）与合并（Merging）</span></a></h1><p><a href="https://gitimmersion.com/lab_31.html" target="_blank" rel="noopener noreferrer">原文连接</a></p><ul><li>[ ] 待补充</li></ul><h1 id="_36-多仓库" tabindex="-1"><a class="header-anchor" href="#_36-多仓库"><span>36 多仓库</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 克隆本地仓库 hello 为 cloned_hello</span></span>
<span class="line"><span class="token function">git</span> clone hello cloned_hello</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Cloning into <span class="token string">&#39;cloned_hello&#39;</span><span class="token punctuation">..</span>.</span>
<span class="line">done.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查 cloned_hello 的提交历史</span></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">*   f2e2ed1 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merged main fixed conflict. <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> greet, origin/greet, origin/HEAD<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span><span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> * eee1cf6 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Made interactive <span class="token punctuation">(</span>origin/master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span>   d52de78 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merge branch <span class="token string">&#39;master&#39;</span> into greet <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span><span class="token punctuation">\\</span> <span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> <span class="token operator">|</span>/  </span>
<span class="line"><span class="token operator">|</span> * 8a9c07e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added README <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 9025f0a <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Updated Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 366bd33 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Hello uses Greeter <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 35f07c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added greeter class <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span>/  </span>
<span class="line">* 0d15d6c <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added a Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* aecacc4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Moved hello.rb to lib <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 cloned_hello 的所有分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* greet</span>
<span class="line">  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/greet</span>
<span class="line">  remotes/origin/greet</span>
<span class="line">  remotes/origin/master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_39-origin-仓库" tabindex="-1"><a class="header-anchor" href="#_39-origin-仓库"><span>39 Origin 仓库</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看当前仓库关联的远程仓库</span></span>
<span class="line"><span class="token function">git</span> remote</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">origin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 origin 的相关信息</span></span>
<span class="line"><span class="token function">git</span> remote show origin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* remote origin</span>
<span class="line">  Fetch URL: /home/mgkl/Desktop/git_tutorial/hello</span>
<span class="line">  Push  URL: /home/mgkl/Desktop/git_tutorial/hello</span>
<span class="line">  HEAD branch: greet</span>
<span class="line">  Remote branches:</span>
<span class="line">    greet  tracked</span>
<span class="line">    master tracked</span>
<span class="line">  Local branch configured <span class="token keyword">for</span> <span class="token string">&#39;git pull&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    greet merges with remote greet</span>
<span class="line">  Local ref configured <span class="token keyword">for</span> <span class="token string">&#39;git push&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    greet pushes to greet <span class="token punctuation">(</span>up to <span class="token function">date</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_40-远程分支" tabindex="-1"><a class="header-anchor" href="#_40-远程分支"><span>40 远程分支</span></a></h1><p>默认情况下，git branch 命令仅列出当本地仓库的分支。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看分支</span></span>
<span class="line"><span class="token function">git</span> branch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* greet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，git branch [-a | --all] 命令会将本地仓库中用于追踪远程仓库的追踪分支也列举出来。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看所有分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* greet</span>
<span class="line">  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/greet</span>
<span class="line">  remotes/origin/greet</span>
<span class="line">  remotes/origin/master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是，追踪分支由 Git 系统自动管理。</p><h1 id="_42-拉取变更" tabindex="-1"><a class="header-anchor" href="#_42-拉取变更"><span>42 拉取变更</span></a></h1><p>现在假设，我们在 hello 仓库对 README 文件作如下修改并提交：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">This is the Hello World example from the git tutorial.</span>
<span class="line">(changed in original)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> <span class="token function">add</span> README</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Changed README in original repo&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 git fetch 可以从远程仓库 cloned_hello 拉取上述变更；但默认，git fethc 命令并不会自动为我们进行分支的合并操作。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> fetch</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> hist <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* f9db1c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Changed README <span class="token keyword">in</span> original repo <span class="token punctuation">(</span>origin/greet, origin/HEAD<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">*   f2e2ed1 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merged main fixed conflict. <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> greet<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span><span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> * eee1cf6 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Made interactive <span class="token punctuation">(</span>origin/master<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span>   d52de78 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Merge branch <span class="token string">&#39;master&#39;</span> into greet <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span><span class="token punctuation">\\</span> <span class="token punctuation">\\</span>  </span>
<span class="line"><span class="token operator">|</span> <span class="token operator">|</span>/  </span>
<span class="line"><span class="token operator">|</span> * 8a9c07e <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added README <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 9025f0a <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Updated Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 366bd33 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Hello uses Greeter <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* <span class="token operator">|</span> 35f07c2 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added greeter class <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">|</span>/  </span>
<span class="line">* 0d15d6c <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Added a Rakefile <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* aecacc4 <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Moved hello.rb to lib <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* f80511d <span class="token number">2025</span>-05-06 <span class="token operator">|</span> Add an author/email comment <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 2c1e42d <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Added a default value <span class="token punctuation">(</span>tag: v1<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* de82ecc <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Unrelated change to c <span class="token punctuation">(</span>tag: v1-beta<span class="token punctuation">)</span> <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 74cf2db <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Changes <span class="token keyword">for</span> a and b <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 55b8500 <span class="token number">2025</span>-05-05 <span class="token operator">|</span> Using ARGV <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line">* 296786b <span class="token number">2025</span>-05-05 <span class="token operator">|</span> First Commit <span class="token punctuation">[</span>mgkl92<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 合并远程分支 origin/greet 到 greet 分支</span></span>
<span class="line"><span class="token function">git</span> merge origin/greet</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Updating f2e2ed1<span class="token punctuation">..</span>f9db1c2</span>
<span class="line">Fast-forward</span>
<span class="line"> README <span class="token operator">|</span> <span class="token number">3</span> ++-</span>
<span class="line"> <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 的 git pull 命令将自动为我们拉取远程分支的变更并进行合并，它等价于先使用 git fetch 命令再使用 git merge 命令（Git 会默认合并到当前分支）。</p><h1 id="_45-在本地添加追踪分支" tabindex="-1"><a class="header-anchor" href="#_45-在本地添加追踪分支"><span>45 在本地添加追踪分支</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 使用本地 master 分支追踪 origin/master 分支（远程仓库 hello 的 master 分支）</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">--track</span> master origin/master</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Branch <span class="token string">&#39;master&#39;</span> <span class="token builtin class-name">set</span> up to track remote branch <span class="token string">&#39;master&#39;</span> from <span class="token string">&#39;origin&#39;</span><span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查所有分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">--all</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* greet</span>
<span class="line">  master</span>
<span class="line">  remotes/origin/HEAD -<span class="token operator">&gt;</span> origin/greet</span>
<span class="line">  remotes/origin/greet</span>
<span class="line">  remotes/origin/master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_46-创建裸仓库" tabindex="-1"><a class="header-anchor" href="#_46-创建裸仓库"><span>46 创建裸仓库</span></a></h1><p>裸仓库不包含工作目录，仅包含 .git 目录。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建 hello 仓库的裸仓库 hello.git</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--bare</span> hello hello.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Cloning into bare repository <span class="token string">&#39;hello.git&#39;</span><span class="token punctuation">..</span>.</span>
<span class="line">done.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 hello.git 仓库目录结构</span></span>
<span class="line"><span class="token function">ls</span> hello.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">branches  config  description  HEAD  hooks  info  objects  packed-refs  refs</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将 hello.git 添加为 hello 仓库的远程仓库并命名为 shared</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span>  shared <span class="token punctuation">..</span>/hello.git/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看远程仓库</span></span>
<span class="line"><span class="token function">git</span> remote show shared</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">* remote shared</span>
<span class="line">  Fetch URL: <span class="token punctuation">..</span>/hello.git/</span>
<span class="line">  Push  URL: <span class="token punctuation">..</span>/hello.git/</span>
<span class="line">  HEAD branch: greet</span>
<span class="line">  Remote branches:</span>
<span class="line">    greet  new <span class="token punctuation">(</span>next fetch will store <span class="token keyword">in</span> remotes/shared<span class="token punctuation">)</span></span>
<span class="line">    master new <span class="token punctuation">(</span>next fetch will store <span class="token keyword">in</span> remotes/shared<span class="token punctuation">)</span></span>
<span class="line">  Local refs configured <span class="token keyword">for</span> <span class="token string">&#39;git push&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">    greet  pushes to greet  <span class="token punctuation">(</span>up to <span class="token function">date</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_49-推送变更" tabindex="-1"><a class="header-anchor" href="#_49-推送变更"><span>49 推送变更</span></a></h1><p>现在假设，我们对 hello 仓库的 README 文件作如下修改并提交：</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">This is the Hello World example from the git tutorial.</span>
<span class="line">(Changed in the original and pushed to shared)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> <span class="token function">add</span> README</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Added shared comment to readme&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将对 README 的变更推送到远程仓库 shared</span></span>
<span class="line"><span class="token function">git</span> push shared greet</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Enumerating objects: <span class="token number">5</span>, done.</span>
<span class="line">Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, done.</span>
<span class="line">Delta compression using up to <span class="token number">4</span> threads</span>
<span class="line">Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.</span>
<span class="line">Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">362</span> bytes <span class="token operator">|</span> <span class="token number">362.00</span> KiB/s, done.</span>
<span class="line">Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">1</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">To <span class="token punctuation">..</span>/hello.git/</span>
<span class="line">   f9db1c2<span class="token punctuation">..</span>33dfb3a  greet -<span class="token operator">&gt;</span> greet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_50-托管你的-git-仓库" tabindex="-1"><a class="header-anchor" href="#_50-托管你的-git-仓库"><span>50 托管你的 Git 仓库</span></a></h1><p><a href="https://gitimmersion.com/lab_50.html" target="_blank" rel="noopener noreferrer">原文连接</a></p><ul><li>[ ] 待补充</li></ul>`,164)]))}const o=n(p,[["render",i]]),r=JSON.parse('{"path":"/tool/git.html","title":"Git Immersion 学习","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752157449000,"contributors":[{"name":"mgkl92","username":"mgkl92","email":"zst_lff@126.com","commits":1,"url":"https://github.com/mgkl92"}],"changelog":[{"hash":"fe3e92b79c5ccc97720e31b2002a0ab509a32be5","time":1752157449000,"email":"zst_lff@126.com","author":"mgkl92","message":"Add more notes"}]},"filePathRelative":"tool/git.md"}');export{o as comp,r as data};
