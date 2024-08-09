/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ProtectedRoute.js":
/*!******************************************!*\
  !*** ./src/components/ProtectedRoute.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst ProtectedRoute = ({ children })=>{\n    const { authToken } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const isAuthPage = router.pathname === \"/login\" || router.pathname === \"/register\";\n        if (!authToken && !isAuthPage) {\n            router.push(\"/login\");\n        }\n    }, [\n        authToken,\n        router\n    ]);\n    return children;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm90ZWN0ZWRSb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0M7QUFDTTtBQUNVO0FBRWxELE1BQU1HLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUNoQyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHSCw4REFBT0E7SUFDN0IsTUFBTUksU0FBU0wsc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1PLGFBQWFELE9BQU9FLFFBQVEsS0FBSyxZQUFZRixPQUFPRSxRQUFRLEtBQUs7UUFDdkUsSUFBSSxDQUFDSCxhQUFhLENBQUNFLFlBQVk7WUFDM0JELE9BQU9HLElBQUksQ0FBQztRQUNoQjtJQUNKLEdBQUc7UUFBQ0o7UUFBV0M7S0FBTztJQUV0QixPQUFPRjtBQUNYO0FBRUEsaUVBQWVELGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJ1LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUuanM/YmNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuXG5jb25zdCBQcm90ZWN0ZWRSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IGF1dGhUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBdXRoUGFnZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL3JlZ2lzdGVyJztcbiAgICAgICAgaWYgKCFhdXRoVG9rZW4gJiYgIWlzQXV0aFBhZ2UpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH0sIFthdXRoVG9rZW4sIHJvdXRlcl0pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWRSb3V0ZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsIlByb3RlY3RlZFJvdXRlIiwiY2hpbGRyZW4iLCJhdXRoVG9rZW4iLCJyb3V0ZXIiLCJpc0F1dGhQYWdlIiwicGF0aG5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProtectedRoute.js\n");

/***/ }),

/***/ "./src/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./src/contexts/AuthContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jwt_decode__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);\n([jwt_decode__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [authToken, setAuthToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const register = async (username, password)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:3000/users\", {\n                user: {\n                    username,\n                    password\n                }\n            });\n        } catch (error) {\n            console.error(\"Error registering\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_4___default().parse(document.cookie);\n        const token = cookies.authToken;\n        if (token) {\n            setAuthToken(token);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (authToken) {\n            const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__.jwtDecode)(authToken);\n            setUser(decodedToken);\n        } else {\n            setUser(null);\n        }\n    }, [\n        authToken\n    ]);\n    const logout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:3000/logout\", {}, {\n                headers: {\n                    Authorization: `Bearer ${authToken}`\n                }\n            });\n        } catch (error) {\n            console.error(\"Error logging out\", error);\n        } finally{\n            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_4___default().serialize(\"authToken\", \"\", {\n                path: \"/\",\n                maxAge: -1\n            });\n            setAuthToken(null);\n            window.location.href = \"/login\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            authToken,\n            setAuthToken,\n            user,\n            logout,\n            register\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/santiagovelosa/Desktop/meru-react/src/contexts/AuthContext.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDaEM7QUFDYjtBQUNFO0FBRTVCLE1BQU1PLDRCQUFjUCxvREFBYUE7QUFFMUIsU0FBU1EsYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNWSxXQUFXLE9BQU9DLFVBQVVDO1FBQzlCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1aLGtEQUFVLENBQUMsK0JBQStCO2dCQUM3RE8sTUFBTTtvQkFBRUc7b0JBQVVDO2dCQUFTO1lBQy9CO1FBQ0osRUFBRSxPQUFPRyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3ZDO0lBQ0o7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWtCLFVBQVVmLG1EQUFZLENBQUNpQixTQUFTakIsTUFBTTtRQUM1QyxNQUFNa0IsUUFBUUgsUUFBUVgsU0FBUztRQUMvQixJQUFJYyxPQUFPO1lBQ1BiLGFBQWFhO1FBQ2pCO0lBQ0osR0FBRyxFQUFFO0lBRUxyQixnREFBU0EsQ0FBQztRQUNOLElBQUlPLFdBQVc7WUFDWCxNQUFNZSxlQUFlckIscURBQVNBLENBQUNNO1lBQy9CRyxRQUFRWTtRQUNaLE9BQU87WUFDSFosUUFBUTtRQUNaO0lBQ0osR0FBRztRQUFDSDtLQUFVO0lBRWQsTUFBTWdCLFNBQVM7UUFDWCxJQUFJO1lBQ0EsTUFBTXJCLGtEQUFVLENBQUMsZ0NBQWdDLENBQUMsR0FBRztnQkFDakRzQixTQUFTO29CQUFFQyxlQUFlLENBQUMsT0FBTyxFQUFFbEIsVUFBVSxDQUFDO2dCQUFDO1lBQ3BEO1FBQ0osRUFBRSxPQUFPUyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ3ZDLFNBQVU7WUFDTkksU0FBU2pCLE1BQU0sR0FBR0EsdURBQWdCLENBQUMsYUFBYSxJQUFJO2dCQUFFd0IsTUFBTTtnQkFBS0MsUUFBUSxDQUFDO1lBQUM7WUFFM0VwQixhQUFhO1lBQ2JxQixPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUMzQjtJQUNKO0lBRUEscUJBQ0ksOERBQUMzQixZQUFZNEIsUUFBUTtRQUFDQyxPQUFPO1lBQUUxQjtZQUFXQztZQUFjQztZQUFNYztZQUFRWjtRQUFTO2tCQUMxRUw7Ozs7OztBQUdiO0FBRU8sU0FBUzRCO0lBQ1osT0FBT3BDLGlEQUFVQSxDQUFDTTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL21lcnUtcmVhY3QvLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanM/Nzg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBbYXV0aFRva2VuLCBzZXRBdXRoVG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTozMDAwL3VzZXJzJywge1xuICAgICAgICAgICAgICAgIHVzZXI6IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBjb29raWUucGFyc2UoZG9jdW1lbnQuY29va2llKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmF1dGhUb2tlbjtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW4pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGF1dGhUb2tlbikge1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKGF1dGhUb2tlbik7XG4gICAgICAgICAgICBzZXRVc2VyKGRlY29kZWRUb2tlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICB9XG4gICAgfSwgW2F1dGhUb2tlbl0pO1xuXG4gICAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTozMDAwL2xvZ291dCcsIHt9LCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIG91dCcsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5zZXJpYWxpemUoJ2F1dGhUb2tlbicsICcnLCB7IHBhdGg6ICcvJywgbWF4QWdlOiAtMX0pO1xuXG4gICAgICAgICAgICBzZXRBdXRoVG9rZW4obnVsbCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhdXRoVG9rZW4sIHNldEF1dGhUb2tlbiwgdXNlciwgbG9nb3V0LCByZWdpc3RlciB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJqd3REZWNvZGUiLCJheGlvcyIsImNvb2tpZSIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoVG9rZW4iLCJzZXRBdXRoVG9rZW4iLCJ1c2VyIiwic2V0VXNlciIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImVycm9yIiwiY29uc29sZSIsImNvb2tpZXMiLCJwYXJzZSIsImRvY3VtZW50IiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJsb2dvdXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNlcmlhbGl6ZSIsInBhdGgiLCJtYXhBZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProtectedRoute */ \"./src/components/ProtectedRoute.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_5__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.pathname === \"/\") {\n            router.push(\"/register\");\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/santiagovelosa/Desktop/meru-react/src/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/santiagovelosa/Desktop/meru-react/src/pages/_app.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/santiagovelosa/Desktop/meru-react/src/pages/_app.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDTTtBQUNlO0FBQzNCO0FBQzhCO0FBRTFELFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCRCxnREFBU0EsQ0FBQztRQUNOLElBQUlPLE9BQU9DLFFBQVEsS0FBSyxLQUFLO1lBQ3pCRCxPQUFPRSxJQUFJLENBQUM7UUFDaEI7SUFDSixHQUFHO1FBQUNGO0tBQU87SUFFWCxxQkFDSSw4REFBQ0wsK0RBQVlBO2tCQUNULDRFQUFDQyxrRUFBY0E7c0JBQ1gsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lcnUtcmVhY3QvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCAnLi4vYXBwL2dsb2JhbHMuY3NzJztcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm90ZWN0ZWRSb3V0ZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yZWdpc3RlcicpO1xuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgICAgIDxQcm90ZWN0ZWRSb3V0ZT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3RlY3RlZFJvdXRlPlxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBdXRoUHJvdmlkZXIiLCJQcm90ZWN0ZWRSb3V0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicGF0aG5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("jwt-decode");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();