var old_size = 0;
var current_size = 0;
var referer = '';

function init_check_frame_size(url)
{
        referer = url;

        window.addEvent('domready', start_frame_check)
}

function start_frame_check()
{
	if (parent.frames.length > 0)
		setInterval(check_frame_size, 150);
}

function check_frame_size()
{
	if (window.webkit)
		current_size = document.body.clientHeight;
	else
		current_size = document.body.scrollHeight + 10;

	if (current_size != old_size)
	{
		old_size = current_size;
		parent.location = referer + "#" + current_size.toString();
	}
}

