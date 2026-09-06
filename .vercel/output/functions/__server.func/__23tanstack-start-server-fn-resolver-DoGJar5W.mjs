//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DoGJar5W.js
var manifest = {
	"032174825f368796784456ac601c30a0efb4887f2713706117025d20be5eb000": {
		functionName: "getPublicCoursesFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"0c663e963b7e91c3d331c964fe523ee52a6f44a3f41a353d685593396f9724de": {
		functionName: "checkAuthFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"12240b4f3db93cde1a65620345a87c1db2c8c2c8e900e75eab339e1307885af6": {
		functionName: "getDashboardStatsFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"13f072bcb0defb6ecd263bdb3fc8aaf828e38ea11c4733e56d9e1581cfc92c4a": {
		functionName: "exportPaymentsFn_createServerFn_handler",
		importer: () => import("./_ssr/export-BZbVRKGN.mjs")
	},
	"2f626000867da5a61f21feab5ff08b3c0d8aabdbd2634c294834ad4ccb68e818": {
		functionName: "logoutFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"41df4f75f3ed6dc9c672d553e00ce1d075f64cebb3e97d8dad597c178aa842ef": {
		functionName: "getAdminGalleryFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"49c0c8f533b2c8e8f74dc4a7fff03a3f1012b67bab2317158abef09ecbd101e2": {
		functionName: "getSessionFn_createServerFn_handler",
		importer: () => import("./_ssr/auth-functions-0wUKdw2z.mjs")
	},
	"49dcbcd0215da2532db4137c92042c18d89b52565d8e359085b1a1ae212b6985": {
		functionName: "logoutFn_createServerFn_handler",
		importer: () => import("./_ssr/auth-functions-0wUKdw2z.mjs")
	},
	"616ccbdc67f76f4202a56efa5610cfa96cb2570bbf422e5479453c7213f2b3de": {
		functionName: "getEnquiriesFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"751a8a6bdaa9911211a312879fc845d26424a164f3a6b8b97863ff3eeba84465": {
		functionName: "submitEnquiryFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"89720fa7d07a91ee36640e101ec3e421b356837ff2db507a44bbe47a5aeb119d": {
		functionName: "getPublicGalleryFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"89d082a2adcc961aa14203bb348393e8f65766d634ccd979c36e19d9a4d876ea": {
		functionName: "getSettingsFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"96253f2500ce9c4e55d835db3a759f8acd07144c4f97c20853e145d2d5e590ce": {
		functionName: "loginFn_createServerFn_handler",
		importer: () => import("./_ssr/auth-functions-0wUKdw2z.mjs")
	},
	"9efcd0df4df4b6bff25127d6aa2d958c86c8d50e58d719369873c6b74b786c13": {
		functionName: "exportStudentsFn_createServerFn_handler",
		importer: () => import("./_ssr/export-BZbVRKGN.mjs")
	},
	"b7e90880cc0dfbacc8253610d9cf812d6a0d9fc2f8b30aac770e34a7d4ea95a1": {
		functionName: "getAdminCoursesFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"b93c4fc6550e44bced113342801e52d573c2d6e7732d7aa13cb43d3beb197bff": {
		functionName: "getCourseBySlugFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"ce0dbbd3ede3e83cfe5ebed55cfcdc90cc337578345995c8613d2fbb4df3708e": {
		functionName: "getPaymentsFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"f3eee142ad4ae9105f6b7ebcfbe30e76c99d81a63fc4f937467faf87edb40250": {
		functionName: "getAdminTestimonialsFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"f46fbcdfc744977e7e30f6318da9185a6aee6799b59b4b91d89c5a7ed4325fac": {
		functionName: "getPublicTestimonialsFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	},
	"f91c012dc296d338256995ceba0a6bd8f043e5710e66e2cc5d07762b8dbd653c": {
		functionName: "getStudentsFn_createServerFn_handler",
		importer: () => import("./_ssr/admin-mxU8zPht.mjs")
	},
	"fdad76f66590512404b4110799fa58b110f3643b1a2db6061fe41e320c2c001f": {
		functionName: "loginFn_createServerFn_handler",
		importer: () => import("./_ssr/functions-DvHw1Z7z.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
