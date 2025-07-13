import{_ as s,c as a,b as e,o as p}from"./app-CkPgLnmy.js";const l={};function i(t,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="gbd-basic-usage" tabindex="-1"><a class="header-anchor" href="#gbd-basic-usage"><span>GBD Basic Usage</span></a></h1><h2 id="调试程序" tabindex="-1"><a class="header-anchor" href="#调试程序"><span>调试程序</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">gdb <span class="token operator">&lt;</span>program name<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2><p>现假设，我们有如下程序：</p><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">size_t</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行程序-run-r" tabindex="-1"><a class="header-anchor" href="#运行程序-run-r"><span>运行程序 <code>run[r]</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">（gdb）r</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Starting program: /home/mgkl/workspace/cpp_projects/gbd_examples/a.out </span>
<span class="line"><span class="token punctuation">[</span>Thread debugging using libthread_db enabled<span class="token punctuation">]</span></span>
<span class="line">Using <span class="token function">host</span> libthread_db library <span class="token string">&quot;/lib/x86_64-linux-gnu/libthread_db.so.1&quot;</span><span class="token builtin class-name">.</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">2</span></span>
<span class="line"><span class="token number">3</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line">Hello, World<span class="token operator">!</span></span>
<span class="line"><span class="token punctuation">[</span>Inferior <span class="token number">1</span> <span class="token punctuation">(</span>process <span class="token number">24958</span><span class="token punctuation">)</span> exited normally<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加断点-break-b" tabindex="-1"><a class="header-anchor" href="#添加断点-break-b"><span>添加断点 <code>break[b]</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在函数出添加断点</span></span>
<span class="line">（gdb）break <span class="token operator">&lt;</span>function name<span class="token operator">&gt;</span></span>
<span class="line">（gdb）break main</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Breakpoint <span class="token number">3</span> at 0x55555555517c: <span class="token function">file</span> test.c, line <span class="token number">3</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在某行添加断点</span></span>
<span class="line">（gdb）break <span class="token operator">&lt;</span>line number<span class="token operator">&gt;</span></span>
<span class="line">（gdb）break <span class="token number">6</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Breakpoint <span class="token number">2</span> at 0x5555555551a7: <span class="token function">file</span> test.c, line <span class="token number">6</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看断点</span></span>
<span class="line">（gdb）info b</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Num     Type           Disp Enb Address            What</span>
<span class="line"><span class="token number">1</span>       breakpoint     keep y   0x000055555555517c <span class="token keyword">in</span> main<span class="token punctuation">(</span>int, char const**<span class="token punctuation">)</span> at test.c:3</span>
<span class="line"><span class="token number">2</span>       breakpoint     keep y   0x00005555555551a7 <span class="token keyword">in</span> main<span class="token punctuation">(</span>int, char const**<span class="token punctuation">)</span> at test.c:6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看变量内容-print-p" tabindex="-1"><a class="header-anchor" href="#查看变量内容-print-p"><span>查看变量内容 <code>print[p]</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"></span>
<span class="line"><span class="token comment"># 打印数组 arr 的内容</span></span>
<span class="line">（gdb）p arr</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token variable">$7</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span>, <span class="token number">0</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印变量地址</span></span>
<span class="line">（gdb）p <span class="token operator">&amp;</span>arr</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token variable">$11</span> <span class="token operator">=</span> <span class="token punctuation">(</span>int <span class="token punctuation">(</span>*<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 0x7fffffffd700</span>
<span class="line"></span>
<span class="line">（gdb）p <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token variable">$9</span> <span class="token operator">=</span> <span class="token punctuation">(</span>int *<span class="token punctuation">)</span> 0x7fffffffd700</span>
<span class="line"></span>
<span class="line">（gdb）p <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token variable">$10</span> <span class="token operator">=</span> <span class="token punctuation">(</span>int *<span class="token punctuation">)</span> 0x7fffffffd704</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入函数调用-step-s" tabindex="-1"><a class="header-anchor" href="#进入函数调用-step-s"><span>进入函数调用 <code>step[s]</code></span></a></h3><p>现假设，我们有如下程序：</p><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">size_t</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在 hello 函数调用出添加断点</span></span>
<span class="line">（gbd）b <span class="token number">14</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Breakpoint <span class="token number">1</span> at 0x1215: <span class="token function">file</span> test.c, line <span class="token number">14</span>.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行程序</span></span>
<span class="line">（gbd）r</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Starting program: /home/mgkl/workspace/cpp_projects/gbd_examples/a.out </span>
<span class="line"><span class="token punctuation">[</span>Thread debugging using libthread_db enabled<span class="token punctuation">]</span></span>
<span class="line">Using <span class="token function">host</span> libthread_db library <span class="token string">&quot;/lib/x86_64-linux-gnu/libthread_db.so.1&quot;</span><span class="token builtin class-name">.</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">2</span></span>
<span class="line"><span class="token number">3</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line"></span>
<span class="line">Breakpoint <span class="token number">1</span>, main <span class="token punctuation">(</span>argc<span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">argv</span><span class="token operator">=</span>0x7fffffffd838<span class="token punctuation">)</span> at test.c:14</span>
<span class="line"><span class="token number">14</span>              hello<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入 hello 函数</span></span>
<span class="line">（gbd）s</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">hello <span class="token punctuation">(</span><span class="token punctuation">)</span> at test.c:4</span>
<span class="line"><span class="token number">4</span>               printf<span class="token punctuation">(</span><span class="token string">&quot;Hello, World!<span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 继续执行程序</span></span>
<span class="line">（gbd）n</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Hello, World<span class="token operator">!</span></span>
<span class="line"><span class="token number">5</span>       <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志功能" tabindex="-1"><a class="header-anchor" href="#日志功能"><span>日志功能</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">（gdb）set logging <span class="token builtin class-name">enable</span> on</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Copying output to gdb.txt.</span>
<span class="line">Copying debug output to gdb.txt.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置观察点-watch" tabindex="-1"><a class="header-anchor" href="#设置观察点-watch"><span>设置观察点 <code>watch</code></span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在 for 循环入口设置断点并观察变量 i </span></span>
<span class="line">（gdb）b <span class="token number">10</span></span>
<span class="line">（gdb）wathc i</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Hardware watchpoint <span class="token number">2</span>: i</span>
<span class="line"><span class="token number">11</span>                      printf<span class="token punctuation">(</span><span class="token string">&quot;%d<span class="token entity" title="\\n">\\n</span>&quot;</span>, arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token number">10</span>              <span class="token keyword">for</span> <span class="token punctuation">(</span>size_t i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> ++i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">Hardware watchpoint <span class="token number">2</span>: i</span>
<span class="line"></span>
<span class="line">Old value <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">New value <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">0x000055555555520e <span class="token keyword">in</span> main <span class="token punctuation">(</span>argc<span class="token operator">=</span><span class="token number">1</span>, <span class="token assign-left variable">argv</span><span class="token operator">=</span>0x7fffffffda08<span class="token punctuation">)</span> at test.c:10</span>
<span class="line"><span class="token number">10</span>              <span class="token keyword">for</span> <span class="token punctuation">(</span>size_t i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> ++i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看观察点</span></span>
<span class="line">（gdb）info <span class="token function">watch</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line">Num     Type           Disp Enb Address            What</span>
<span class="line"><span class="token number">2</span>       hw watchpoint  keep y   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-core-文件调试程序" tabindex="-1"><a class="header-anchor" href="#使用-core-文件调试程序"><span>使用 core 文件调试程序</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">gdb <span class="token operator">&lt;</span>binary program<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>core file<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="调试运行中的程序" tabindex="-1"><a class="header-anchor" href="#调试运行中的程序"><span>调试运行中的程序</span></a></h3><p>现在假设，我有如下文件</p><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token operator">++</span>i<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">size_t</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// some bug here</span></span>
<span class="line">        <span class="token comment">// int *temp = NULL;</span></span>
<span class="line">        <span class="token comment">// *temp = 10;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">gdb <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在新的终端运行程序</span></span>
<span class="line">./a.out <span class="token operator">&amp;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">22622</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 调试 pid 为 22622 的程序</span></span>
<span class="line">gdb <span class="token parameter variable">-p</span> <span class="token number">22622</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line">Attaching to process <span class="token number">22622</span></span>
<span class="line">Reading symbols from /home/mgkl/workspace/cpp_projects/gdb_examples/a.out<span class="token punctuation">..</span>.</span>
<span class="line">Reading symbols from /lib/x86_64-linux-gnu/libc.so.6<span class="token punctuation">..</span>.</span>
<span class="line">Reading symbols from /usr/lib/debug/.build-id/cd/410b710f0f094c6832edd95931006d883af48e.debug<span class="token punctuation">..</span>.</span>
<span class="line">Reading symbols from /lib64/ld-linux-x86-64.so.2<span class="token punctuation">..</span>.</span>
<span class="line">Reading symbols from /usr/lib/debug/.build-id/e4/de036b19e4768e7591b596c4be9f9015f2d28a.debug<span class="token punctuation">..</span>.</span>
<span class="line"><span class="token punctuation">[</span>Thread debugging using libthread_db enabled<span class="token punctuation">]</span></span>
<span class="line">Using <span class="token function">host</span> libthread_db library <span class="token string">&quot;/lib/x86_64-linux-gnu/libthread_db.so.1&quot;</span><span class="token builtin class-name">.</span></span>
<span class="line">test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> at test.c:13</span>
<span class="line"><span class="token number">13</span>      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 逐步查看程序执行情况</span></span>
<span class="line">（gdb）n</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Output</span></span>
<span class="line"><span class="token number">30</span>                      test1<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const o=s(l,[["render",i]]),u=JSON.parse('{"path":"/tool/gdb.html","title":"GBD Basic Usage","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752157449000,"contributors":[{"name":"mgkl92","username":"mgkl92","email":"zst_lff@126.com","commits":1,"url":"https://github.com/mgkl92"}],"changelog":[{"hash":"fe3e92b79c5ccc97720e31b2002a0ab509a32be5","time":1752157449000,"email":"zst_lff@126.com","author":"mgkl92","message":"Add more notes"}]},"filePathRelative":"tool/gdb.md"}');export{o as comp,u as data};
