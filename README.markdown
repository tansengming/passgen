# Password Generator

This is a [tiny one page app](http://tansengming.github.com/passgen) that creates a unique password for your sites based on the site URL and a master password.

Since this a mobile version for [Nic Wolff's Password Generator](http://angel.net/~nic/passwd.html) so perhaps its best if I let him explain what it is.

<blockquote>
    <p><em>I hate passwords.</em> I mean, I don&#39;t mind having really important ones be made-up and memorized but what about all those e-commerce and community sites that want me to create accounts? I end up using the same password at all of them and then I feel stupid knowing that one SQL Server exploit or disgruntled admin could cost me my whole identity.</p>
    <p>So, this is a little Javascript program that will concatenate two fields and MD5 them. The idea is that you choose one master password to secure all your others, and then generate passwords for each site, server, router, &amp;c. by putting a completely obvious name for that resource in the "Site name" field.</p>
    <p>Then just hit <i>return</i> and copy your new password so you can paste it into whatever site you&#39;re registering at. It&#39;ll be different for every site, and undiscoverable by anyone who doesn&#39;t know your master password &#151; but you can always retrieve it by simply using this form again.</p>
    <p>(Note that all this is done by your browser running the program that's in the source of this page; nothing is passed back to my server. You can make your own local copy of this page, use it off-line, &c.)</p>
</blockquote>

There's also a deprecated version [made with jQuery Mobile](https://github.com/tansengming/passgen-jqm)