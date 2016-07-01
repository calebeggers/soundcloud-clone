import $ from "jquery";
import _ from "lodash";

var baseURL = "https://api.soundcloud.com";
var clientID = "?client_id=dc8563b1228605a0697344a79a7aa2d8"

console.log($.ajax({
	url:`${baseURL}/tracks${clientID}`
}))

$.ajax({
	url: `${baseURL}/tracks${clientID}`
	}).then(function(response){
		fillList(response)
		$(".track").on('click', function (e) {
		console.log(this.dataset.title)
		$(".player").html(
			`<audio controls="controls">Your browser does not support the <code>audio</code> element.
				<source src="${this.dataset.stream_url}${clientID}"</source>
			</audio>
				<span>${this.dataset.title} is now playing.</span>
			`
		)
	})
	});

$("#button").on('click', function (e) {
	e.preventDefault();
	var searchTerm = $(".search-text").val();
	$.ajax({
		url: `${baseURL}/tracks${clientID}`,
		data: {
			q: searchTerm
		}
	}).then(function(response){
		fillList(response)
		$(".track").on('click', function (e) {
		console.log(this.dataset.title)
		$(".player").html(
			`<audio controls="controls">Your browser does not support the <code>audio</code> element.
				<source src="${this.dataset.stream_url}${clientID}"</source>
			</audio>
				<span>${this.dataset.title} is now playing.</span>
			`
		)
	})
	});

})

function imageCheck (obj) {
	if (obj.artwork_url === null) {
		return obj.user.avatar_url;
	} else {
		return obj.artwork_url;
	}
}

function fillList (response) {
	console.log(response);
	$(".track-list").html(response.map(function (obj) {
		console.log(obj.title)
		return `<div class="track" data-stream_url=${obj.stream_url} data-title="${obj.title}" >
			<img src="${imageCheck(obj)}">
			<div class="song">
				<span>${obj.title}</span>
			</div>
			<div class="band">
				<span>${obj.user.username}</span>
			</div>
		</div>`

	}));
}