import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BgUU1Jx6.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/functions-DE_HuUbQ.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getSettingsFn = createServerFn({ method: "GET" }).handler(createSsrRpc("89d082a2adcc961aa14203bb348393e8f65766d634ccd979c36e19d9a4d876ea"));
var getPublicCoursesFn = createServerFn({ method: "GET" }).handler(createSsrRpc("032174825f368796784456ac601c30a0efb4887f2713706117025d20be5eb000"));
var getCourseBySlugFn = createServerFn({ method: "GET" }).validator((slug) => slug).handler(createSsrRpc("b93c4fc6550e44bced113342801e52d573c2d6e7732d7aa13cb43d3beb197bff"));
var getPublicGalleryFn = createServerFn({ method: "GET" }).handler(createSsrRpc("89720fa7d07a91ee36640e101ec3e421b356837ff2db507a44bbe47a5aeb119d"));
var getPublicTestimonialsFn = createServerFn({ method: "GET" }).handler(createSsrRpc("f46fbcdfc744977e7e30f6318da9185a6aee6799b59b4b91d89c5a7ed4325fac"));
var submitEnquiryFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("751a8a6bdaa9911211a312879fc845d26424a164f3a6b8b97863ff3eeba84465"));
var loginFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("fdad76f66590512404b4110799fa58b110f3643b1a2db6061fe41e320c2c001f"));
var logoutFn = createServerFn({ method: "POST" }).handler(createSsrRpc("2f626000867da5a61f21feab5ff08b3c0d8aabdbd2634c294834ad4ccb68e818"));
var checkAuthFn = createServerFn({ method: "GET" }).handler(createSsrRpc("0c663e963b7e91c3d331c964fe523ee52a6f44a3f41a353d685593396f9724de"));
//#endregion
export { getPublicGalleryFn as a, loginFn as c, getPublicCoursesFn as i, logoutFn as l, createSsrRpc as n, getPublicTestimonialsFn as o, getCourseBySlugFn as r, getSettingsFn as s, checkAuthFn as t, submitEnquiryFn as u };
