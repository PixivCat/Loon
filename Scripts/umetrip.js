const url = $request.url;
const header = $request.headers;
const ua = $request.headers.rpid||$request.headers.Rpid;
const blockIds = [
	"1000018",
	"1130016"
];

if(blockIds.includes(ua)){
	$done({status:"HTTP/1.1 404 Not Found"});
}else{
	$done();
}
