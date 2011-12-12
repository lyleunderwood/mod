

pkg = ( ns )->
	curr = null
	parts = [].concat = ns.split( "." )
	for part, index in parts
		if curr == null
			curr = eval part
			continue
		else
			unless curr[ part ]?
				curr = curr[ part ] = {}
			else
				curr = curr[ part ]
	curr

document.write('<scri'+'pt src="./toaster/src/mod.js"></scr'+'ipt>')
document.write('<scri'+'pt src="./toaster/src/EmbeddedUI.js"></scr'+'ipt>')
document.write('<scri'+'pt src="./toaster/src/Graph.js"></scr'+'ipt>')
document.write('<scri'+'pt src="./toaster/src/Toolbar.js"></scr'+'ipt>')
document.write('<scri'+'pt src="./toaster/src/PluginLoader.js"></scr'+'ipt>')
