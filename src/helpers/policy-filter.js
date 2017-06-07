export default function (to, from, next) {
	console.log("passou no policy")
	next()
}