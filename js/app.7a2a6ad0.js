(function(){"use strict";var e={1473:function(e,t,a){a(7658);var r=a(9242),n=a(4161),s=a(8541),i=a(3396);function o(e,t){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var u=a(89);const d={},_=(0,u.Z)(d,[["render",o]]);var c=_,m=a(2483);function E(e,t,a,r,n,s){const o=(0,i.up)("SignUp");return(0,i.wg)(),(0,i.j4)(o)}function l(e,t,a,r,n,s){const o=(0,i.up)("LBaseSign");return(0,i.wg)(),(0,i.j4)(o,{button_title:"Sign Up",func_type:e.authID.SIGN_UP},null,8,["func_type"])}function p(e,t,a,r,n,s){const o=(0,i.up)("CEnterField"),u=(0,i.up)("CButton");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(o,{title:"Email",onValue:t[0]||(t[0]=t=>e.email=t)}),(0,i.Wm)(o,{title:"Password ",type:"password",onValue:t[1]||(t[1]=t=>e.password=t)}),(0,i.Wm)(u,{title:e.button_title,onClick:e.func},null,8,["title","onClick"])])}var f=a(4870),T=a(7139);const A=["type"];function S(e,t,a,n,s,o){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,(0,T.zw)(e.title),1),(0,i.wy)((0,i._)("input",{type:e.type||"text",onInput:t[0]||(t[0]=t=>e.$emit("value",e.value)),"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t)},null,40,A),[[r.YZ,e.value]])])}var R=(0,i.aZ)({props:{title:String,type:String},setup(){const e=(0,f.iH)("");return{value:e}}});const g=(0,u.Z)(R,[["render",S]]);var I=g;function y(e,t,a,r,n,s){return(0,i.wg)(),(0,i.iD)("div",null,(0,T.zw)(e.title),1)}var D=(0,i.aZ)({props:{title:String,type:String}});const h=(0,u.Z)(D,[["render",y],["__scopeId","data-v-1333a9df"]]);var v,L,b,P,O,N,M,U,w,C,G,B,F,k,V,q,H,Z,x=h,Y=a(65);(function(e){e["G_IS_SIDEBAR_COLLAPSED"]="sideBar/isSideBarCollapsed",e["A_TOGGLE_SIDEBAR"]="sideBar/toggleSideBar",e["A_COLLAPSE_SIDEBAR"]="sideBar/collapseSideBar"})(v||(v={})),function(e){e["G_MENU"]="menu/menu",e["G_AVAILABLE_MENU"]="menu/availableMenu",e["A_GET_MENU"]="menu/getMenu",e["A_ADD_MEAL"]="menu/addMeal"}(L||(L={})),function(e){e["G_ORDER_PREVIEW_LIST"]="order_item/orderItemPreviewList",e["G_ORDERED_LIST"]="order_item/orderedItemList",e["G_TABLE_REP_DATA"]="order_item/tableRepData",e["A_GET_ORDER_ITEMS"]="order_item/getOrderItems",e["A_GET_ORDER_ITEM"]="order_item/getOrderItem",e["A_ADD_TO_ORDER_PREVIEW"]="order_item/addToOrderPreview",e["A_INCREASE_QUANTITY"]="order_item/increaseQuantity",e["A_DECREASE_QUANTITY"]="order_item/decreaseQuantity",e["A_ORDER"]="order_item/order",e["A_SERVE"]="order_item/serve",e["A_PAY"]="order_item/pay",e["M_REMOVE_ORDER_ITEM"]="order_item/removeOrderItem",e["M_UPDATE"]="order_item/update"}(b||(b={})),function(e){e["G_ORDER_LIST"]="order/orderList",e["G_ORDER"]="order/order",e["G_ORDER_BY_TABLE"]="order/orderByTable",e["A_ADD_ORDER"]="order/addOrder",e["A_GET_ORDERS"]="order/getOrders",e["A_GET_ORDER"]="order/getOrder",e["A_UPDATE_ORDER"]="order/updateOrder",e["M_REMOVE_ORDER"]="order/removeOrder",e["M_UPDATE"]="order/update"}(P||(P={})),function(e){e["G_TABLES"]="table/tables",e["G_TABLE"]="table/table",e["A_ADD_TABLE"]="table/addTable",e["A_GET_TABLES"]="table/getTables",e["A_GET_TABLE"]="table/getTable",e["A_UPDATE_TABLE"]="table/updateTable",e["A_INIT_TABLE"]="table/initTable",e["M_UPDATE_TABLE"]="table/update"}(O||(O={})),function(e){e["G_VAT"]="bill/VAT"}(N||(N={})),function(e){e["G_USER"]="auth/user",e["A_SIGN_UP"]="auth/signUp",e["A_SIGN_IN"]="auth/signIn",e["A_SIGN_OUT"]="auth/signOut",e["A_REFRESH"]="auth/refreshToken",e["A_GET_ME"]="auth/getMe",e["M_REMOVE_CURRENT_USER"]="auth/removeCurrentUser",e["M_SET_USER"]="auth/setUser"}(M||(M={})),function(e){e["G_CUSTOMER_BY_ORDER"]="customer/customerByOrder",e["A_SEARCH_CUSTOMER_BY_PN"]="customer/searchCustomerByPhoneNumber",e["A_ADD_PHONE_NUMBER"]="customer/addPhoneNumber",e["A_UPDATE_CUSTOMER"]="customer/updateCustomer",e["M_REMOVE_CUSTOMER"]="customer/removeCustomer",e["M_ADD_CUSTOMER"]="customer/addCustomer",e["M_UPDATE"]="customer/update"}(U||(U={})),function(e){e["A_UPDATE_PROFILE"]="profile/updateProfile"}(w||(w={})),function(e){e["G_STAFF"]="staff/staff",e["G_STAFFS"]="staff/staffs",e["G_SEARCHED_STAFFS"]="staff/searchedStaffs",e["G_IS_NEXT"]="staff/isNext",e["G_IS_PREVIOUS"]="staff/isPrevious",e["A_GET_STAFFS"]="staff/getStaffs",e["A_NEXT_PAGE"]="staff/nextPage",e["A_PREVIOUS_PAGE"]="staff/previousPage",e["A_UPDATE_STAFF"]="staff/updateStaff",e["M_REMOVE_STAFF"]="staff/removeStaff",e["M_ADD_STAFF"]="staff/addStaff",e["M_UPDATE"]="staff/update"}(C||(C={})),function(e){e["G_STAFF_TYPES"]="staff_type/staffTypes",e["A_GET_STAFF_TYPES"]="staff_type/getStaffTypes"}(G||(G={})),function(e){e["G_MENU_TYPES"]="menu_type/menuTypes",e["A_GET_MENU_TYPES"]="menu_type/getMenuTypes"}(B||(B={})),function(e){e["G_IS_IN_CART"]="cart/isInCart"}(F||(F={})),function(e){e["A_UPLOAD_FILE"]="file_management/uploadFile"}(k||(k={})),function(e){e["SIGNUP"]="/signup",e["SIGNIN"]="/signin",e["HOME"]="/",e["SETTING"]="/setting",e["TABLES"]="/tables",e["TABLE"]="/table/:id",e["STAFFS"]="/staffs",e["STAFF"]="/staff/:id",e["MENU"]="/item",e["MEAL"]="/item/:id"}(V||(V={})),function(e){e["SIGNUP"]="signup",e["SIGNIN"]="signin",e["HOME"]="home",e["SETTING"]="setting",e["TABLES"]="tables",e["TABLE"]="table",e["STAFFS"]="staffs",e["STAFF"]="staff",e["MENU"]="item",e["MEAL"]="meal"}(q||(q={})),function(e){e[e["SUPER_STAFF"]=1]="SUPER_STAFF",e[e["MANAGER"]=2]="MANAGER",e[e["EMPLOYEE"]=3]="EMPLOYEE",e[e["UNAPPROVED"]=4]="UNAPPROVED"}(H||(H={})),function(e){e[e["SIGN_IN"]=1]="SIGN_IN",e[e["SIGN_UP"]=2]="SIGN_UP"}(Z||(Z={}));var j=(0,i.aZ)({components:{CEnterField:I,CButton:x},props:{button_title:String,func_type:Number},setup(e){const t=(0,Y.oR)(),a=(0,m.tv)(),r=(0,f.iH)(""),n=(0,f.iH)("");async function s(){await t.dispatch(M.A_SIGN_IN,{email:r.value,password:n.value}),a.push(V.HOME)}async function i(){await t.dispatch(M.A_SIGN_UP,{email:r.value,password:n.value}),a.push(V.SIGNIN)}async function o(){e.func_type==Z.SIGN_IN?s():i()}return{email:r,password:n,func:o}}});const Q=(0,u.Z)(j,[["render",p]]);var X=Q,W=(0,i.aZ)({components:{LBaseSign:X},props:{},setup(){const e=Z;return{authID:e}}});const z=(0,u.Z)(W,[["render",l]]);var K,$,J,ee,te,ae,re,ne=z;(function(e){e["EMAIL"]="email",e["PASSWORD"]="password",e["FIRSTNAME"]="first_name",e["LASTNAME"]="last_name",e["PHONE_NUMBER"]="phone_number",e["LOCALE"]="locale",e["SIGNUP"]="sign_up",e["SIGNIN"]="sign_in",e["SETTING"]="setting",e["TABLES"]="tables",e["TABLE"]="table",e["HOME"]="home",e["SIGNOUT"]="sign_out",e["STAFFS"]="staffs",e["STAFF"]="staff",e["DAYS"]="days",e["HOURS"]="hours",e["MINUTES"]="minutes",e["SECONDS"]="seconds",e["SEARCH"]="search",e["MEAL_NAME"]="meal_name",e["QUANTITY"]="quantity",e["UNIT_PRICE"]="unit_price",e["TOTAL"]="total",e["ORDERED_AT"]="ordered_at",e["PREVIEW"]="preview",e["ORDER"]="order",e["SERVED"]="served",e["SERVED_AT"]="served_at",e["SERVING_QUANTITY"]="serving_quantity",e["SERVED_QUANTITY"]="served_quantity",e["SERVE"]="serve",e["PAY_BILL"]="pay_bill",e["VAT"]="VAT",e["AMOUNT"]="amount",e["NUM_PEOPLE"]="num_people",e["UPDATE"]="update",e["MENU"]="menu",e["DESC"]="desc",e["ADD_MEAL"]="add_meal",e["MEAL_TYPE"]="meal_type",e["ROLE"]="role",e["PHOTO"]="photo"})(K||(K={})),function(e){e["ENTER_EMAIL"]="enter_email",e["ENTER_PASSWORD"]="enter_password",e["ENTER_PHONENUMBER"]="enter_phone_number",e["ENTER_MEAL_NAME"]="enter_meal_name",e["ENTER_UNIT_PRICE"]="enter_unit_price",e["ENTER_DESC"]="enter_desc"}($||($={})),function(e){e["ACCESS"]="access",e["REFRESH"]="refresh",e["EXPIRED"]="expired"}(J||(J={})),function(e){e["INDEX"]=":id",e["MASTER_NAME"]=":master_name"}(ee||(ee={})),function(e){e["SEX"]="m_sex",e["CITY"]="m_city",e["COUNTRY"]="m_country",e["DISTRICT"]="m_district",e["FILE_TYPE"]="m_file_type",e["MENU_TYPE"]="m_menu_type",e["STAFF_TYPE"]="m_staff_type"}(te||(te={})),function(e){e["PERMISSION_DENIED"]="permission_denied"}(ae||(ae={})),function(e){e["LOGO"]="https://restaurant-bucket-tranhdq-1.s3.ap-southeast-1.amazonaws.com/assets/Ge.svg"}(re||(re={}));var se=(0,i.aZ)({setup(){const e=(0,m.tv)(),t=(0,f.iH)(""),a=(0,f.iH)("");return{ECommon:K,EPlaceHolder:$,ERouter:V,router:e,email:t,password:a,EAssets:re}},components:{SignUp:ne}});const ie=(0,u.Z)(se,[["render",E]]);var oe=ie;function ue(e,t,a,r,n,s){const o=(0,i.up)("SignIn");return(0,i.wg)(),(0,i.j4)(o)}function de(e,t,a,r,n,s){const o=(0,i.up)("LBaseSign");return(0,i.wg)(),(0,i.j4)(o,{button_title:"Login",func_type:e.authID.SIGN_IN},null,8,["func_type"])}var _e=(0,i.aZ)({components:{LBaseSign:X},props:{},setup(){const e=Z;return{authID:e}}});const ce=(0,u.Z)(_e,[["render",de]]);var me=ce,Ee=(0,i.aZ)({setup(){const e=(0,m.tv)(),t=(0,f.iH)(""),a=(0,f.iH)("");return{ECommon:K,EPlaceHolder:$,ERouter:V,router:e,email:t,password:a,EAssets:re}},components:{SignIn:me}});const le=(0,u.Z)(Ee,[["render",ue]]);var pe=le;const fe={class:"home"},Te=(0,i._)("div",null,"home",-1),Ae=[Te];function Se(e,t,a,r,n,s){return(0,i.wg)(),(0,i.iD)("div",fe,Ae)}const Re=n.Z.create({baseURL:"https://dongquoctranh.pythonanywhere.com/api/",timeout:5e3});var ge,Ie,ye,De,he,ve,Le,be,Pe,Oe,Ne,Me=Re;function Ue(e,t,a){return t?.map((t=>{t.value&&(e=e.replace(t.key,t.value.toString()))})),a&&(e+="?",a.map(((t,r)=>{t.key&&t.value&&(e+=t.key+"="+t.value,r+1<a.length&&(e+="&"))}))),e}(function(e){e["CREATE"]="file-management/create",e["LIST"]="file-management/list",e["DETAIL"]="file-management/:id/detail",e["UPDATE"]="file-management/:id/update",e["DELETE"]="file-management/:id/delete"})(ge||(ge={})),Ie||(Ie={}),function(e){e["TOKEN"]="auth/token",e["REFRESH_TOKEN"]="auth/token/refresh",e["GET_ME"]="auth/get-me",e["CHANGE_PASSWORD"]="auth/change-password"}(ye||(ye={})),function(e){e["CREATE"]="customer/create",e["LIST"]="customer/list",e["DETAIL"]="customer/:id/detail",e["DELETE"]="customer/:id/delete",e["UPDATE"]="customer/:id/update"}(De||(De={})),function(e){e["CREATE"]="master/:master_name/create",e["LIST"]="master/:master_name/list",e["DELETE"]="master/:master_name/:id/list"}(he||(he={})),function(e){e["CREATE"]="menu/create",e["LIST"]="menu/list",e["DETAIL"]="menu/:id/detail",e["UPDATE"]="menu/:id/update",e["DELETE"]="menu/:id/delete"}(ve||(ve={})),function(e){e["CREATE"]="order/create",e["LIST"]="order/list",e["DETAIL"]="order/:id/detail",e["UPDATE"]="order/:id/update",e["DELETE"]="order/:id/delete"}(Le||(Le={})),function(e){e["CREATE"]="order_item/create",e["LIST"]="order_item/list",e["DETAIL"]="order_item/:id/detail",e["UPDATE"]="order_item/:id/update",e["DELETE"]="order_item/:id/delete"}(be||(be={})),function(e){e["CREATE"]="profile/create",e["DETAIL"]="profile/:id/detail",e["UPDATE"]="profile/:id/update",e["DELETE"]="profile/:id/delete"}(Pe||(Pe={})),function(e){e["CREATE"]="staff/create",e["LIST"]="staff/list",e["DETAIL"]="staff/:id/detail",e["UPDATE"]="staff/:id/update",e["DELETE"]="staff/:id/delete"}(Oe||(Oe={})),function(e){e["CREATE"]="table/create",e["LIST"]="table/list",e["DETAIL"]="table/:id/detail",e["UPDATE"]="table/:id/update",e["DELETE"]="table/:id/delete"}(Ne||(Ne={}));var we=(0,i.aZ)({setup(){async function e(){const e=Ue(he.LIST,[{key:ee.MASTER_NAME,value:te.COUNTRY}]);await Me.get(e)}return{click:e}}});const Ce=(0,u.Z)(we,[["render",Se]]);var Ge,Be,Fe,ke,Ve,qe=Ce,He=a(2415),Ze={namespaced:!0,state:{isSideBarHide:!1,isSideBarCollapsed:!0},getters:{isSideBarCollapsed:e=>e.isSideBarCollapsed},actions:{toggleSideBar({state:e}){e.isSideBarCollapsed=!e.isSideBarCollapsed},collapseSideBar({state:e}){e.isSideBarCollapsed=!0}}},xe={namespaced:!0,state:{menu:[]},getters:{menu:e=>e.menu,availableMenu:e=>e.menu.filter((e=>e.is_available))},actions:{async getMenu({state:e}){const t=await n.Z.get(ve.LIST);e.menu=t.results},async addMeal({state:e},t){const a=await Me.post(ve.CREATE,t);e.menu.push(a)}}};function Ye(e,t,a){let r="";return e.map(((e,n)=>{r+=(0===n?"":a)+e[t]})),r}function je(e,t){return e.toString().padStart(t||3,"0")}function Qe(e,t){let a="";return e.map(((e,r)=>{e&&(a+=(0===r?"":t)+e)})),a}(function(e){e["NAME"]="name",e["ORDERING"]="ordering",e["PAGE"]="page",e["PAGE_SIZE"]="page_size",e["SEARCH"]="search",e["ID"]="id"})(Ge||(Ge={})),function(e){e["IS_AVAILABLE"]="is_available"}(Be||(Be={})),function(e){e["TABLE_ID__IN"]="table_id__in"}(Fe||(Fe={})),function(e){e["ORDER_ID__IN"]="order_id__in",e["ORDER__CUSTOMER_ID"]="order__customer_id"}(ke||(ke={})),Fe||(Fe={}),function(e){e["PROFILE__FIRST_NAME"]="profile__first_name",e["PROFILE__LAST_NAME"]="profile__last_name",e["PROFILE__PHONE_NUMBER"]="profile__phone_number"}(Ve||(Ve={}));var Xe={namespaced:!0,state:{orderList:[]},getters:{orderList:e=>e.orderList,order:e=>t=>e.orderList.find((e=>e.id===t.id)),orderByTable:e=>t=>e.orderList.find((e=>e?.table?.id===t.id&&!e.paid_at))},actions:{async addOrder({state:e,commit:t},a){const r=await Me.post(Le.CREATE,a);return e.orderList.push(r),t(O.M_UPDATE_TABLE,r.table,{root:!0}),r},async getOrders({state:e},t){if(!t?.length)return e.orderList;const a=Ye(t,Ge.ID,","),r=Ue(Le.LIST,[],[{key:Fe.TABLE_ID__IN,value:a}]),n=await Me.get(r);return e.orderList=n.results,e.orderList},async getOrder({commit:e},t){const a=Ye([t],Ge.ID,","),r=Ue(Le.LIST,[],[{key:Fe.TABLE_ID__IN,value:a}]),n=await Me.get(r),s=n.results[0];return s&&e(P.M_UPDATE,s,{root:!0}),s?.customer&&e(U.M_UPDATE,s.customer,{root:!0}),s},async updateOrder({commit:e},t){const a=Ue(Le.UPDATE,[{key:ee.INDEX,value:t.order.id}]),r=await Me.put(a,t.updateData);return e(P.M_UPDATE,r,{root:!0}),r?.table&&e(O.M_UPDATE_TABLE,r.table,{root:!0}),r?.customer&&e(U.M_UPDATE,r.customer,{root:!0}),t.order}},mutations:{removeOrder(e,t){const a=e.orderList.indexOf(t);a>-1&&e.orderList.splice(a,1)},update(e,t){const a=e.orderList.find((e=>t.id===e?.id));a?(a.num_people=t.num_people,a.paid_at=t.paid_at,a.table=t.table,a.customer=t.customer):e.orderList.push(t)}}},We={namespaced:!0,state:{orderItemList:[]},getters:{orderItemPreviewList:e=>t=>e.orderItemList.filter((e=>e?.table?.id===t.id&&!e.updated_at)),orderedItemList:e=>t=>e.orderItemList.filter((e=>e?.table?.id===t.id&&e.updated_at)),tableRepData:e=>t=>{let a,r=null,n=null,s=0,i=0;e.orderItemList.filter((e=>e?.table?.id===t.id&&e.order)).map(((e,t)=>{0===t&&(a=e.order?.customer?.profile?.phone_number),e.served_at&&(r=r?new Date(e.served_at>r?e.served_at:r):new Date(e.served_at)),e.updated_at&&(n=n?new Date(e.updated_at>n?e.updated_at:n):new Date(e.updated_at)),s+=e.served_quantity?e.served_quantity:0,i+=e.quantity}));const o={phoneNumber:a,lastServedAt:r,newestOrderedAt:n,numOrders:i,numServed:s};return o}},actions:{addToOrderPreview({state:e},t){if(e.orderItemList.some((e=>e.menu.id===t.menu.id&&e.table===t.table&&!e.order)))return;const a={order:t?.order,menu:t.menu,quantity:1,table:t.table};e.orderItemList.push(a)},increaseQuantity({state:e},t){t.quantity+=1},decreaseQuantity({state:e},t){t.quantity-=1},async getOrderItems({state:e},t){if(!t.length)return void(e.orderItemList=[]);const a=Ye(t,Ge.ID,","),r=Ue(be.LIST,[],[{key:ke.ORDER_ID__IN,value:a}]),n=await Me.get(r);e.orderItemList=n.results,e.orderItemList.map((e=>{e.table=e.order?.table}))},async getOrderItem({commit:e},t){const a=Ye([t],Ge.ID,","),r=Ue(be.LIST,[],[{key:ke.ORDER_ID__IN,value:a}]),n=await Me.get(r),s=n.results;s.map((a=>{a.table=t?.table,e(b.M_UPDATE,a,{root:!0})}))},async order({state:e,commit:t,dispatch:a},r){let n=r.table,s=r.tableOrder;n.is_available&&(n=await a(O.A_UPDATE_TABLE,{table:r.table,updateData:{is_available:!1}},{root:!0})),r.tableOrder||(s=await a(P.A_ADD_ORDER,{table_id:n.id,num_people:1,customer_id:r?.customer?.id||0},{root:!0})),r.items.map((async a=>{const n=e.orderItemList.find((e=>a.menu.id===e.menu.id&&a.table?.id===e?.table?.id&&e.order));if(n){const e=Ue(be.UPDATE,[{key:ee.INDEX,value:n.id}]),s=await Me.put(e,{quantity:n.quantity+a.quantity,created_by_id:r.staff.id});s.table=r.table,s.updated_at=new Date(s.updated_at),t(b.M_UPDATE,s,{root:!0})}else{const e=await Me.post(be.CREATE,{quantity:a.quantity,created_by_id:r.staff.id,order_id:s?.id,menu_id:a.menu.id});e.table=r.table,e.created_at=new Date(e.created_at),e.updated_at=new Date(e.updated_at),t(b.M_UPDATE,e,{root:!0})}t(b.M_REMOVE_ORDER_ITEM,a,{root:!0})}))},async serve({commit:e},t){const a=Ue(be.UPDATE,[{key:ee.INDEX,value:t.item.id}]),r=await Me.put(a,{served_quantity:(t.item?.served_quantity||0)+t.serveQuantity,served_at:new Date(Date.now()).toISOString()});r.served_at=new Date(r.served_at),e(b.M_UPDATE,r,{root:!0})},async pay({commit:e,dispatch:t},a){a.orderItems.map((t=>e(b.M_REMOVE_ORDER_ITEM,t,{root:!0})));const r=Ue(Le.UPDATE,[{key:ee.INDEX,value:a.order.id}]);await Me.put(r,{paid_at:new Date(Date.now()).toISOString()}),await t(O.A_UPDATE_TABLE,{table:a.order.table,updateData:{is_available:!0}},{root:!0}),e(P.M_REMOVE_ORDER,a.order,{root:!0}),a?.customer&&e(U.M_REMOVE_CUSTOMER,a.customer,{root:!0}),a.orderItems.map((t=>e(b.M_REMOVE_ORDER_ITEM,t,{root:!0})))}},mutations:{removeOrderItem(e,t){const a=e.orderItemList.indexOf(t);a>-1&&e.orderItemList.splice(a,1)},update(e,t){const a=e.orderItemList.find((e=>t.id===e?.id));a?(a.order=t.order,a.menu=t.menu,a.quantity=t.quantity,a.served_quantity=t.served_quantity,a.served_at=t.served_at,a.created_at=t.created_at,a.updated_at=t.updated_at,a.created_by=t.created_by):e.orderItemList.push(t)}}},ze={namespaced:!0,state:{tables:[]},getters:{tables:e=>e.tables,table:e=>t=>e.tables.find((e=>e.id===t))},actions:{async addTable({state:e}){const t=e.tables.length,a=je(t+1),r=await Me.post(Ne.CREATE,{name:a});e.tables.push(r)},async getTables({state:e,dispatch:t}){const a=await n.Z.get(Ne.LIST);if(e.tables=a.results,e.tables){const e=await t(P.A_GET_ORDERS,a.results,{root:!0});e&&await t(b.A_GET_ORDER_ITEMS,e,{root:!0})}},async getTable({state:e},t){const a=Ue(Ne.DETAIL,[{key:ee.INDEX,value:t.id}]),r=await n.Z.get(a);return r},async initTable({dispatch:e,commit:t},a){const r=await e(O.A_GET_TABLE,a,{root:!0});t(O.M_UPDATE_TABLE,r,{root:!0});const n=await e(P.A_GET_ORDER,a,{root:!0});n&&await e(b.A_GET_ORDER_ITEM,n,{root:!0})},async updateTable({state:e},t){const a=Ue(Ne.UPDATE,[{key:ee.INDEX,value:t.table.id}]);return await Me.put(a,t.updateData),t.table={...t.table,...t.updateData},t.table}},mutations:{update(e,t){const a=e.tables.find((e=>t.id===e?.id));a&&(a.is_available=t.is_available)}}},Ke={namespaced:!0,state:{VAT:5},getters:{VAT:e=>e.VAT},actions:{}};const{cookies:$e}=(0,s.fP)();var Je,et={namespaced:!0,state:{user:null},getters:{user:e=>e.user},actions:{async signUp({state:e},t){await n.Z.post(Oe.CREATE,t)},async signIn({dispatch:e},t){const a=await n.Z.post(ye.TOKEN,t);$e.set(J.ACCESS,a.access),$e.set(J.REFRESH,a.refresh),await e(M.A_GET_ME,{},{root:!0})},signOut({commit:e}){$e.remove(J.ACCESS),$e.remove(J.REFRESH),e(M.M_REMOVE_CURRENT_USER,{},{root:!0})},async refreshToken({dispatch:e}){const t=await n.Z.post(ye.REFRESH_TOKEN,{refresh:$e.get(J.REFRESH)});$e.set(J.ACCESS,t.access),$e.set(J.REFRESH,t.refresh),e(M.A_GET_ME,{},{root:!0})},async getMe({commit:e}){const t=await Me.get(ye.GET_ME);e(M.M_SET_USER,t,{root:!0})}},mutations:{removeCurrentUser(e){e.user=null},setUser(e,t){e.user=t}}};(function(e){e["PROFILE__PHONE_NUMBER"]="profile__phone_number"})(Je||(Je={}));var tt={namespaced:!0,state:{customerList:[]},getters:{customerList:e=>e.customerList,customerByOrder:e=>t=>e.customerList.find((e=>e.id===t?.customer?.id))},actions:{async addPhoneNumber({commit:e,dispatch:t},a){const r=await Me.post(De.CREATE,{profile:{phone_number:a.phoneNumber}});return e(U.M_ADD_CUSTOMER,r,{root:!0}),t(P.A_UPDATE_ORDER,{order:a.order,updateData:{customer_id:r.id}},{root:!0}),r},async updateCustomer({commit:e},t){const a=Ue(De.UPDATE,[{key:ee.INDEX,value:t.customer.id}]),r=await Me.put(a,t.updateData);return e(U.M_UPDATE,r,{root:!0}),r},async searchCustomerByPhoneNumber({state:e},t){const a=Ue(De.LIST,[],[{key:Ge.SEARCH,value:t},{key:Ge.PAGE_SIZE,value:20},{key:Ge.PAGE,value:1},{key:Ge.ORDERING,value:Je.PROFILE__PHONE_NUMBER}]),r=await Me.get(a);return r.results}},mutations:{removeCustomer(e,t){const a=e.customerList.indexOf(t);a>-1&&e.customerList.splice(a,1)},addCustomer(e,t){e.customerList.push(t)},update(e,t){const a=e.customerList.find((e=>t.id===e?.id));a?a.profile=t.profile:e.customerList.push(t)}}};function at(e,t){const a=e.replace(/ /g,"_");return t?a.toLowerCase():a}function rt(e,t){if(!e)return"";const a=new Date(e);return Qe([je(a.getDay(),2),je(a.getMonth(),2),a.getFullYear()],t)}var nt=a(7038),st={namespaced:!0,state:{staffList:[],count:0,currentPage:0,alreadyPage:0,next:""},getters:{staff:e=>t=>e.staffList.find((e=>e.id===t)),staffs:e=>t=>{const a=e.staffList.filter((a=>a.currentPage===(e.currentPage||1)&&![t?.type?.id||0,1].includes(a?.type?.id||0))),r=[],{t:n}=(0,nt.QT)();return a.map((e=>{r.push({id:e.id,phone_number:e?.profile?.phone_number,first_name:e?.profile?.first_name,last_name:e?.profile?.last_name,email:e?.email,type:n(at(e?.type?.name||"",!0)),dob:rt(e?.profile?.dob,"/"),sex:e?.profile?.sex?.name,address:Qe([e?.profile?.address?.street,e?.profile?.address?.district?.name,e?.profile?.address?.district?.city?.name,e?.profile?.address?.district?.city?.country?.name],", ")})})),r},searchedStaffs:e=>t=>{e.staffList.find((e=>{const a=[e.email];return e?.profile?.phone_number&&a.push(e?.profile?.phone_number),e?.profile?.first_name&&a.push(e?.profile?.first_name),e?.profile?.last_name&&a.push(e?.profile?.last_name),t in a}))},isNext:e=>!!e.next,isPrevious:e=>e.currentPage>1},actions:{async getStaffs({state:e}){const t=await Me.get(Oe.LIST);e.staffList=t.results,e.count=t.count,e.next=t.next,e.currentPage=1,e.staffList.map((t=>t.currentPage=e.currentPage))},async nextPage({state:e}){if(e.next){if(e.currentPage>=e.alreadyPage&&e.currentPage<e.count){const t=await Me.get(e.next);if(!t.results.length)return;e.next=t.next,e.alreadyPage=e.alreadyPage+1,e.count=t.count,t.results.map((t=>{t.currentPage=e.currentPage+1,e.staffList.push(t)}))}e.currentPage=e.currentPage+1}},previousPage({state:e}){e.currentPage<=1||(e.currentPage=e.currentPage-1)},async updateStaff({commit:e},t){const a=Ue(Oe.UPDATE,[{key:ee.INDEX,value:t.staff.id}]),r=await Me.put(a,t.updateData);return e(C.M_UPDATE,r,{root:!0}),r}},mutations:{removeStaff(e,t){const a=e.staffList.indexOf(t);a>-1&&e.staffList.splice(a,1)},addStaff(e,t){e.staffList.push(t)},update(e,t){const a=e.staffList.find((e=>t.id===e?.id));a?(a.type=t.type,a.profile=t.profile):e.staffList.push(t)}}},it={namespaced:!0,state:{typeList:[]},getters:{staffTypes:e=>e.typeList.sort(((e,t)=>(e?.name||"")<(t?.name||"")?1:-1))},actions:{async getStaffTypes({state:e}){const{t:t}=(0,nt.QT)(),a=Ue(he.LIST,[{key:ee.MASTER_NAME,value:te.STAFF_TYPE}]),r=await n.Z.get(a);e.typeList=r.results,e.typeList.map((e=>{e.name=t(at(e?.name||"",!0))}))}}},ot={namespaced:!0,state:{menuList:[]},getters:{isInCart:e=>t=>e.menuList.find((e=>e?.id===t))},actions:{}},ut={namespaced:!0,state:{typeList:[]},getters:{menuTypes:e=>e.typeList.sort(((e,t)=>(e?.name||"")<(t?.name||"")?1:-1))},actions:{async getMenuTypes({state:e}){const{t:t}=(0,nt.QT)(),a=Ue(he.LIST,[{key:ee.MASTER_NAME,value:te.MENU_TYPE}]),r=await n.Z.get(a);e.typeList=r.results,e.typeList.map((e=>{e.name=t(at(e.name||"",!0))}))}}},dt={namespaced:!0,state:{files:[]},getters:{},actions:{async uploadFile({state:e},t){const a=new FormData;a.append("file",t.file,t.file.name),t?.name&&a.append("name",t.file.name),t?.desc&&a.append("desc",t.desc),t?.type_id&&a.append("type_id",t.type_id.toString());const r=await Me.post(ge.CREATE,a);return r}}},_t=(0,Y.MT)({modules:{sideBar:Ze,menu:xe,order:Xe,order_item:We,table:ze,bill:Ke,auth:et,customer:tt,staff:st,staff_type:it,cart:ot,menu_type:ut,file_management:dt},plugins:[(0,He.Z)()]});const ct={en:{id:"ID",home:"home",sign_up:"sign up",sign_in:"sign in",sign_out:"sign out",username:"username",password:"password",first_name:"first name",last_name:"last name",email:"email",phone_number:"phone number",enter_email:"enter your email",enter_phone_number:"enter your phone number",enter_password:"enter your password",enter_meal_name:"enter the meal name",enter_unit_price:"enter the meal's price",enter_desc:"describe the meal",tables:"tables",table:"table",order:"order",add:"add",remove:"remove",bill:"bill",pay:"pay",menu:"menu",setting:"setting",days:"days",hours:"hours",minutes:"minutes",seconds:"seconds",search:"search",meal_name:"name",quantity:"quantity",unit_price:"unit price",total:"total",ordered_at:"order at",preview:"preview",served:"served",served_at:"served at",served_quantity:"served quantity",serving_quantity:"serving quantity",serve:"serve",pay_bill:"pay bill",VAT:"VAT",amount:"amount",permission_denied:"permission denied",num_people:"no. people",staffs:"staffs",staff:"staff",type:"role",sex:"sex",dob:"date of birth",address:"address",detail:"detail",update:"update",desc:"description",add_meal:"add meal",meal_type:"meal type",photo:"photo",created_by:"created by",employee:"employee",manager:"manager",super_staff:"super staff",unapproved:"unapproved person",desserts:"desserts",drinks:"drinks",appetizer:"appetizer",main_course:"main course"},vi:{id:"#",home:"trang chủ",sign_up:"đăng ký",sign_in:"đăng nhập",sign_out:"đăng xuất",username:"tên tài khoản",password:"mật khẩu",first_name:"tên",last_name:"họ",email:"địa chỉ email",phone_number:"số điện thoại",enter_email:"nhập địa chỉ email",enter_phone_number:"nhập số điện thoại",enter_password:"nhập mât khẩu",enter_meal_name:"nhập tên món ăn",enter_unit_price:"nhập giá tiền",enter_desc:"nhập miêu tả món",tables:"bàn",table:"bàn",order:"đặt món",add:"thêm",remove:"xóa",bill:"hóa đơn",pay:"thanh toán",menu:"thực đơn",setting:"cài đặt",days:"ngày",hours:"giờ",minutes:"phút",seconds:"giây",search:"tìm kiếm",meal_name:"tên món",quantity:"số lượng",unit_price:"đơn giá",total:"tổng tiền",ordered_at:"gọi món lúc",preview:"xem trước",served:"đã lên món",served_at:"lên món lúc",served_quantity:"số lượng đã phục vụ",serving_quantity:"số lượng lên món",serve:"lên món",pay_bill:"thanh toán hóa đơn",VAT:"thuế VAT",amount:"thành tiền",permission_denied:"bạn không có quyền truy cập",num_people:"số người",staffs:"nhân viên",staff:"nhân viên",type:"chức vụ",sex:"giới tính",dob:"ngày sinh",address:"địa chỉ",detail:"chi tiết",update:"cập nhật",desc:"miêu tả",add_meal:"thêm món",meal_type:"loại món ăn",photo:"ảnh",created_by:"tạo bởi",employee:"nhân viên",manager:"quản lý",super_staff:"quản trị",unapproved:"chưa cấp phép",desserts:"món tráng miệng",drinks:"đồ uống",appetizer:"món khai vị",main_course:"món chính"}},mt=(0,nt.o)({locale:"vi",messages:ct});var Et=mt;const lt=[{path:V.HOME,name:q.HOME,component:qe,meta:{authRequired:!0}},{path:V.SIGNUP,name:q.SIGNUP,component:oe},{path:V.SIGNIN,name:q.SIGNIN,component:pe}],pt=(0,m.p7)({history:(0,m.PO)("/ge/"),routes:lt});pt.beforeEach(((e,t,a)=>{const r=_t.getters[M.G_USER];if(e.matched.some((e=>e?.meta?.authRequired&&e?.meta?.notAllowedRoles))){const t=e.meta.notAllowedRoles||[];r&&t.includes(r?.type?.id||-1)?alert(Et.t(ae.PERMISSION_DENIED)):r?a():pt.push(V.SIGNIN)}else e.matched.some((e=>e?.meta?.authRequired))?r?a():pt.push(V.SIGNIN):a()}));var ft=pt;const{cookies:Tt}=(0,s.fP)();n.Z.defaults.baseURL="https://dongquoctranh.pythonanywhere.com/api/",n.Z.interceptors.request.use((function(e){return e}),(function(e){return alert(e.message),Promise.reject(e)})),n.Z.interceptors.response.use((function(e){return e.data}),(function(e){return alert(e.message),Promise.reject(e)})),Me.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+Tt.get(J.ACCESS),e}),(function(e){return alert(e.message),Promise.reject(e)})),Me.interceptors.response.use((function(e){return e.data}),(async function(e){return 401===e.response.status?Tt.get(J.REFRESH)&&(await _t.dispatch(M.A_REFRESH),Tt.get(J.ACCESS))?Me(e.config):(_t.commit(M.M_REMOVE_CURRENT_USER),void ft.push(V.SIGNIN)):(alert(e.message),Promise.reject(e))})),(0,r.ri)(c).use(_t).use(ft).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var i=1/0;for(_=0;_<e.length;_++){r=e[_][0],n=e[_][1],s=e[_][2];for(var o=!0,u=0;u<r.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[u])}))?r.splice(u--,1):(o=!1,s<i&&(i=s));if(o){e.splice(_--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var _=e.length;_>0&&e[_-1][2]>s;_--)e[_]=e[_-1];e[_]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,i=r[0],o=r[1],u=r[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(u)var _=u(a)}for(t&&t(r);d<i.length;d++)s=i[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(_)},r=self["webpackChunkge"]=self["webpackChunkge"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1473)}));r=a.O(r)})();
//# sourceMappingURL=app.7a2a6ad0.js.map