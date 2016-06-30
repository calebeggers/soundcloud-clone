import $ from "jquery";
import _ from "lodash";

var baseURL = "https://api.soundcloud.com";
var clientID = "?client_id=dc8563b1228605a0697344a79a7aa2d8"

console.log($.ajax({
	url:`${baseURL}/tracks${clientID}`
}))

$.ajax({
	url: `${baseURL}/tracks${clientID}`
	}).then(function (response) {
		console.log(response);
		response.forEach(function (obj) {
			$(".track-list").append(
			`<div class="track">
				<img src="${imageCheck(obj)}">
				<div class="song">
					<span>${obj.title}</span>
				</div>
				<div class="band">
					<span>${obj.user.username}</span>
				</div>
			</div>`
			)
		});
	});

function imageCheck (obj) {
	if (obj.artwork_url === null) {
		return "../images/no-album";
	} else {
		return obj.artwork_url;
	}
}

	// `<audio controls="controls">Your browser does not support the <code>audio</code> element.
	// 	<source src="${obj.stream_url}${clientID}" type="audio/mp3"</source>
	// </audio>`