const url =
	'https://spreadsheets.google.com/feeds/list/1YJL4EVzb2EWhtxqWhZ7_X6uvrLRbMc3XGIyNhVZ5ZT8/od6/public/values?alt=json';

fetch(url)
	.then((resp) => resp.json())
	.then((json) => {
		console.log(json);
		json.feed.entry.forEach((ent) => {
			const $div = $('<div>').addClass('embed-projects');
			$('.projects').append($div);
			const $img = $('<img>');
			$img.attr('src', ent.gsx$image.$t).addClass('project-img');
			$($div).append($img);
			const $title = $('<h3>');
			$title.text(ent.gsx$title.$t).addClass('project-title');
			$($div).append($title);
			const $desc = $('<p>').addClass('desc');
			$desc.text(ent.gsx$description.$t);
			$($div).append($desc);
			const $skills = $('<p>').addClass('skills');
			$skills.text(ent.gsx$skills.$t);
			$($div).append($skills);
			const $link = $('<a>');
			$link
				.text('View Project')
				.attr('href', ent.gsx$link.$t)
				.addClass('project-link');
			$($div).append($link);

			$($img).wrap(
				$('<a>', {
					href: ent.gsx$link.$t,
				})
			);
		});
	});
