var JQLGrammar=(function(){var aa=function(aq,ap,ar,ao){for(ar=ar||{},ao=aq.length;ao--;ar[aq[ao]]=ap){}return ar},u=[1,18],t=[1,27],s=[1,15],r=[1,26],q=[6,29],p=[1,43],m=[1,51],l=[1,52],k=[1,39],j=[1,44],Z=[1,45],Y=[1,46],X=[1,47],W=[1,48],V=[1,50],U=[1,53],T=[6,26],S=[6,26,29],R=[6,22,26],Q=[6,22,26,29],P=[1,61],O=[1,62],N=[51,52],M=[1,71],L=[6,16,29],K=[6,16,29,56],J=[1,88],H=[1,81],G=[1,91],F=[1,78],E=[1,79],D=[1,80],C=[1,82],B=[1,83],z=[1,84],y=[1,85],i=[1,86],h=[1,87],f=[1,89],e=[1,90],d=[1,92],c=[6,16,19,22,26,29,36,53,56,57,59,64,65,66,67,68,69,70,71,72,73,74,75,76,79,85,86],b=[6,19,22,26,29,36],a=[6,16,19,22,26,29,36,56,57,59,64,65,66,67,68,69,70,71,72,73,75,76,79,85,86],an=[1,131],am=[1,139],al=[1,140],ak=[6,19,22,26],aj=[6,16,19,22,26,29,36,56,57,59,65,66,67,68,69,70,71,72,73,76,79,85,86],ai=[6,16,19,22,26,29,36,56,57,59,65,67,68,69,76,79,85,86],ah=[1,145],ag=[56,79],af=[6,26,29,56],ae=[1,149],ad=[1,150],ac=[6,19,22,26,36,56];var I={trace:function x(){},yy:{},symbols_:{error:2,JQL:3,REMOTE:4,Statement:5,EOF:6,SelectStatement:7,UpdateStatement:8,InsertStatement:9,DeleteStatement:10,SelectSingleRowStatement:11,SELECT:12,SQL_CALC_FOUND_ROWS:13,SelectFieldsList:14,SelectFromTableStatement:15,FROM:16,TableReference:17,SelectWithOptionalWHEREClause:18,WHERE:19,Expression:20,SelectWithOptionalORDERClause:21,ORDER:22,BY:23,OrderByClause:24,SelectWithOptionalLIMITClause:25,LIMIT:26,LimitClause:27,SelectStatementWithoutUnion:28,UNION:29,UpdateStatementBegin:30,UPDATE:31,DelayedClause:32,DELAYED:33,NUMBER:34,UpdateAllRowsStatement:35,SET:36,UpdateFieldsList:37,UpdateWithOptionalWHEREStatement:38,UpdateWithOptionalORDERStatement:39,UpdateWithOptionalLIMITStatement:40,LimitClauseWithoutRowSkipping:41,InsertStatementBegin:42,INSERT:43,IGNORE:44,INTO:45,DeleteAllRowsStatement:46,DELETE:47,DeleteWithOptionalWHEREClauseStatement:48,DeleteWithOptionalORDERClauseStatement:49,DeleteWithOptionalLIMITClauseStatement:50,IDENTIFIER:51,ESCAPED_IDENTIFIER:52,"*":53,SelectFieldEnumeration:54,SelectField:55,",":56,AS:57,UpdateField:58,"=":59,BOOLEAN:60,NULL:61,STRING:62,"!":63,"-":64,"||":65,"<>":66,"&&":67,is:68,like:69,"<=":70,"<":71,">=":72,">":73,"/":74,"+":75,"in":76,"(":77,FunctionCallArgumentsList:78,")":79,FunctionCall:80,BINDING:81,RANDOM:82,OrderByClauseFieldsList:83,OrderByField:84,ASC:85,DESC:86,"$accept":0,"$end":1},terminals_:{2:"error",4:"REMOTE",6:"EOF",12:"SELECT",13:"SQL_CALC_FOUND_ROWS",16:"FROM",19:"WHERE",22:"ORDER",23:"BY",26:"LIMIT",29:"UNION",31:"UPDATE",33:"DELAYED",34:"NUMBER",36:"SET",43:"INSERT",44:"IGNORE",45:"INTO",47:"DELETE",51:"IDENTIFIER",52:"ESCAPED_IDENTIFIER",53:"*",56:",",57:"AS",59:"=",60:"BOOLEAN",61:"NULL",62:"STRING",63:"!",64:"-",65:"||",66:"<>",67:"&&",68:"is",69:"like",70:"<=",71:"<",72:">=",73:">",74:"/",75:"+",76:"in",77:"(",79:")",81:"BINDING",82:"RANDOM",85:"ASC",86:"DESC"},productions_:[0,[3,3],[3,2],[5,1],[5,1],[5,1],[5,1],[11,3],[11,2],[15,3],[18,3],[18,1],[21,4],[21,1],[25,3],[25,1],[28,1],[28,1],[7,1],[7,3],[30,2],[30,1],[32,2],[32,1],[35,4],[38,3],[38,1],[39,4],[39,1],[40,3],[40,1],[8,1],[42,2],[42,1],[9,5],[46,3],[48,3],[48,1],[49,4],[49,1],[50,3],[50,1],[10,1],[17,1],[17,1],[14,1],[14,1],[54,1],[54,3],[55,1],[55,3],[55,3],[37,1],[37,3],[37,3],[58,3],[58,3],[20,1],[20,1],[20,1],[20,1],[20,2],[20,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,5],[20,1],[20,3],[20,1],[20,1],[20,1],[80,3],[80,4],[78,1],[78,3],[24,1],[24,1],[83,1],[83,3],[84,2],[84,2],[84,1],[41,1],[27,3],[27,1]],performAction:function w(o,aq,ar,av,au,ap,at){var ao=ap.length-1;switch(au){case 1:this.$=ap[ao-1];this.$.remote=true;return this.$;break;case 2:this.$=ap[ao-1];this.$.remote=false;return this.$;break;case 3:case 4:case 5:case 6:case 13:case 15:case 16:case 17:case 18:case 26:case 30:case 31:case 39:case 41:case 42:case 78:this.$=ap[ao];break;case 7:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.SELECT,fields:ap[ao],calcFoundRows:true};break;case 8:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.SELECT,fields:ap[ao],calcFoundRows:false};break;case 9:this.$=ap[ao-2];this.$.table=ap[ao];break;case 10:case 25:case 36:this.$=ap[ao-2];this.$.where=ap[ao];break;case 11:case 37:this.$=ap[ao];break;case 12:case 27:case 38:this.$=ap[ao-3];this.$.orderBy=ap[ao];break;case 14:case 29:case 40:this.$=ap[ao-2];this.$.limit=ap[ao];break;case 19:this.$=ap[ao-2];this.$.union=ap[ao];break;case 20:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.UPDATE,delayed:ap[ao]};break;case 21:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.UPDATE};break;case 22:this.$={op:A.TOKEN_TYPES.OPTION_DELAYED,timer:A.parseNumber(ap[ao])};break;case 23:this.$={op:A.TOKEN_TYPES.OPTION_DELAYED,timer:null};break;case 24:this.$=ap[ao-3];this.$.table=ap[ao-2];this.$.fields=ap[ao];break;case 32:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.INSERT,ignoreDuplicates:true};break;case 33:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.INSERT};break;case 34:this.$=ap[ao-4];this.$.table=ap[ao-2];this.$.fields=ap[ao];break;case 35:this.$={op:A.TOKEN_TYPES.STATEMENT,type:A.STATEMENT_TYPES.DELETE,table:ap[ao]};break;case 43:this.$={op:A.TOKEN_TYPES.TABLE_REFERENCE,name:ap[ao]};break;case 44:this.$={op:A.TOKEN_TYPES.TABLE_REFERENCE,name:A.unescapeIdentifier(ap[ao])};break;case 45:this.$={op:A.TOKEN_TYPES.FIELDS_LIST,type:A.FIELD_TYPES.ALL_FIELDS};break;case 46:this.$={op:A.TOKEN_TYPES.FIELDS_LIST,type:A.FIELD_TYPES.SPECIFIC_FIELDS,fields:ap[ao]};break;case 47:case 52:case 85:case 89:this.$=[ap[ao]];break;case 48:case 53:case 54:case 86:case 90:this.$=ap[ao-2].concat(ap[ao]);break;case 49:this.$={op:A.TOKEN_TYPES.FIELD,literal:A.createFieldAliasFromExpression(ap[ao]),expression:ap[ao]};break;case 50:this.$={op:A.TOKEN_TYPES.FIELD,literal:ap[ao],expression:ap[ao-2]};break;case 51:this.$={op:A.TOKEN_TYPES.FIELD,literal:A.unescapeIdentifier(ap[ao]),expression:ap[ao-2]};break;case 55:this.$={op:A.TOKEN_TYPES.UPDATE_FIELD,name:ap[ao-2],expression:ap[ao]};break;case 56:this.$={op:A.TOKEN_TYPES.UPDATE_FIELD,name:A.unescapeIdentifier(ap[ao-2]),expression:ap[ao]};break;case 57:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.NUMBER,value:A.parseNumber(ap[ao])};break;case 58:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.BOOLEAN,value:A.parseBoolean(ap[ao])};break;case 59:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.NULL};break;case 60:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.STRING,value:A.parseString(ap[ao])};break;case 61:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.UNARY,operator:A.OPERATOR.NOT,left:ap[ao]};break;case 62:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.UNARY,operator:A.OPERATOR.INVERT,left:ap[ao]};break;case 63:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.OR,left:ap[ao-2],right:ap[ao]};break;case 64:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.DIFFERENT,left:ap[ao-2],right:ap[ao]};break;case 65:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.AND,left:ap[ao-2],right:ap[ao]};break;case 66:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.EQUALS,left:ap[ao-2],right:ap[ao]};break;case 67:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.EQUALS,left:ap[ao-2],right:{op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.NULL}};break;case 68:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.LIKE,left:ap[ao-2],right:ap[ao]};break;case 69:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.LTE,left:ap[ao-2],right:ap[ao]};break;case 70:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.LT,left:ap[ao-2],right:ap[ao]};break;case 71:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.GTE,left:ap[ao-2],right:ap[ao]};break;case 72:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.GT,left:ap[ao-2],right:ap[ao]};break;case 73:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.MATH,operator:A.OPERATOR.MULTIPLY,left:ap[ao-2],right:ap[ao]};break;case 74:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.MATH,operator:A.OPERATOR.DIVISION,left:ap[ao-2],right:ap[ao]};break;case 75:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.MATH,operator:A.OPERATOR.ADDITION,left:ap[ao-2],right:ap[ao]};break;case 76:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.MATH,operator:A.OPERATOR.DIFFERENCE,left:ap[ao-2],right:ap[ao]};break;case 77:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.LOGICAL,operator:A.OPERATOR.IN,left:ap[ao-4],right:null,haystack:ap[ao-1]};break;case 79:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.GROUP,expression:ap[ao-1]};break;case 80:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.IDENTIFIER,name:ap[ao]};break;case 81:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.IDENTIFIER,name:A.unescapeIdentifier(ap[ao])};break;case 82:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.BINDING,name:A.unescapeBindingName(ap[ao])};break;case 83:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.FUNCTION_CALL,function_name:ap[ao-2],arguments:[]};break;case 84:this.$={op:A.TOKEN_TYPES.EXPRESSION,type:A.EXPRESSION.FUNCTION_CALL,function_name:ap[ao-3],arguments:ap[ao-1]};break;case 87:this.$={op:A.TOKEN_TYPES.OPTION_ORDERING,type:A.ORDERING_STRATEGY.RANDOM};break;case 88:this.$={op:A.TOKEN_TYPES.OPTION_ORDERING,type:A.ORDERING_STRATEGY.ORDERED,fields:ap[ao]};break;case 91:this.$={op:A.TOKEN_TYPES.ORDER_EXPRESSION,expression:ap[ao-1],direction:A.ORDER_DIRECTION.ASCENDING};break;case 92:this.$={op:A.TOKEN_TYPES.ORDER_EXPRESSION,expression:ap[ao-1],direction:A.ORDER_DIRECTION.DESCENDING};break;case 93:this.$={op:A.TOKEN_TYPES.ORDER_EXPRESSION,expression:ap[ao],direction:A.ORDER_DIRECTION.ASCENDING};break;case 94:this.$={op:A.TOKEN_TYPES.OPTION_LIMIT,limit:A.parseNumber(ap[ao]),skip:0};break;case 95:this.$={op:A.TOKEN_TYPES.OPTION_LIMIT,limit:A.parseNumber(ap[ao]),skip:A.parseNumber(ap[ao-2])};break;case 96:this.$={op:A.TOKEN_TYPES.OPTION_LIMIT,limit:A.parseNumber(ap[ao]),skip:0};break}},table:[{3:1,4:[1,2],5:3,7:4,8:5,9:6,10:7,11:13,12:u,15:24,18:21,21:17,25:12,28:8,30:25,31:t,35:22,38:19,39:14,40:9,42:10,43:s,46:23,47:r,48:20,49:16,50:11},{1:[3]},{5:28,7:4,8:5,9:6,10:7,11:13,12:u,15:24,18:21,21:17,25:12,28:8,30:25,31:t,35:22,38:19,39:14,40:9,42:10,43:s,46:23,47:r,48:20,49:16,50:11},{6:[1,29]},{6:[2,3],29:[1,30]},{6:[2,4]},{6:[2,5]},{6:[2,6]},aa(q,[2,18]),{6:[2,31]},{45:[1,31]},{6:[2,42]},aa(q,[2,16]),aa(q,[2,17],{16:[1,32]}),{6:[2,30],26:[1,33]},{44:[1,34],45:[2,33]},{6:[2,41],26:[1,35]},aa(q,[2,15],{26:[1,36]}),{13:[1,37],14:38,20:42,34:p,51:m,52:l,53:k,54:40,55:41,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},aa(T,[2,28],{22:[1,54]}),aa(T,[2,39],{22:[1,55]}),aa(S,[2,13],{22:[1,56]}),aa(R,[2,26],{19:[1,57]}),aa(R,[2,37],{19:[1,58]}),aa(Q,[2,11],{19:[1,59]}),{17:60,51:P,52:O},{16:[1,63]},aa(N,[2,21],{32:64,33:[1,65]}),{6:[1,66]},{1:[2,2]},{11:13,12:u,15:24,18:21,21:17,25:12,28:67},{17:68,51:P,52:O},{17:69,51:P,52:O},{34:M,41:70},{45:[2,32]},{34:M,41:72},{27:73,34:[1,74]},{14:75,20:42,34:p,51:m,52:l,53:k,54:40,55:41,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},aa(L,[2,8]),aa(L,[2,45]),aa(L,[2,46],{56:[1,76]}),aa(K,[2,47]),aa(K,[2,49],{53:J,57:[1,77],59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(c,[2,57]),aa(c,[2,58]),aa(c,[2,59]),aa(c,[2,60]),{20:93,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:94,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},aa(c,[2,78]),{20:95,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},aa(c,[2,80],{77:[1,96]}),aa(c,[2,81]),aa(c,[2,82]),{23:[1,97]},{23:[1,98]},{23:[1,99]},{20:100,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:101,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:102,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{36:[1,103]},aa(b,[2,43]),aa(b,[2,44]),{17:104,51:P,52:O},aa(N,[2,20]),aa(N,[2,23],{34:[1,105]}),{1:[2,1]},aa(q,[2,19]),{36:[1,106]},aa([6,19,22,26,29],[2,9]),{6:[2,29]},{6:[2,94]},{6:[2,40]},aa(q,[2,14]),aa(q,[2,96],{56:[1,107]}),aa(L,[2,7]),{20:42,34:p,51:m,52:l,55:108,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{51:[1,109],52:[1,110]},{20:111,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:112,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:113,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:114,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{61:[1,115]},{20:116,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:117,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:118,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:119,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:120,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:121,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:122,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:123,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:124,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{77:[1,125]},aa(c,[2,61]),aa(a,[2,62],{53:J,74:f}),{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d,79:[1,126]},{20:129,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,78:128,79:[1,127],80:49,81:U},{20:134,24:130,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U,82:an,83:132,84:133},{20:134,24:135,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U,82:an,83:132,84:133},{20:134,24:136,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U,82:an,83:132,84:133},aa(R,[2,25],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(R,[2,36],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(Q,[2,10],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),{37:137,51:am,52:al,58:138},aa(ak,[2,35]),aa(N,[2,22]),{37:141,51:am,52:al,58:138},{34:[1,142]},aa(K,[2,48]),aa(K,[2,50]),aa(K,[2,51]),aa([6,16,19,22,26,29,36,56,57,65,79,85,86],[2,63],{53:J,59:H,64:G,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(aj,[2,64],{53:J,64:G,74:f,75:e}),aa([6,16,19,22,26,29,36,56,57,65,67,79,85,86],[2,65],{53:J,59:H,64:G,66:E,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(ai,[2,66],{53:J,64:G,66:E,70:z,71:y,72:i,73:h,74:f,75:e}),aa(c,[2,67]),aa(ai,[2,68],{53:J,64:G,66:E,70:z,71:y,72:i,73:h,74:f,75:e}),aa(aj,[2,69],{53:J,64:G,74:f,75:e}),aa(aj,[2,70],{53:J,64:G,74:f,75:e}),aa(aj,[2,71],{53:J,64:G,74:f,75:e}),aa(aj,[2,72],{53:J,64:G,74:f,75:e}),aa(c,[2,73]),aa(c,[2,74]),aa(a,[2,75],{53:J,74:f}),aa(a,[2,76],{53:J,74:f}),{20:129,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,78:143,80:49,81:U},aa(c,[2,79]),aa(c,[2,83]),{56:ah,79:[1,144]},aa(ag,[2,85],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(T,[2,27]),aa(S,[2,87]),aa(S,[2,88],{56:[1,146]}),aa(af,[2,89]),aa(af,[2,93],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d,85:[1,147],86:[1,148]}),aa(T,[2,38]),aa(S,[2,12]),aa(ak,[2,24],{36:ae,56:ad}),aa(ac,[2,52]),{59:[1,151]},{59:[1,152]},{6:[2,34],36:ae,56:ad},aa(q,[2,95]),{56:ah,79:[1,153]},aa(c,[2,84]),{20:154,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:134,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U,84:155},aa(af,[2,91]),aa(af,[2,92]),{51:am,52:al,58:156},{51:am,52:al,58:157},{20:158,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},{20:159,34:p,51:m,52:l,60:j,61:Z,62:Y,63:X,64:W,77:V,80:49,81:U},aa(c,[2,77]),aa(ag,[2,86],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(af,[2,90]),aa(ac,[2,53]),aa(ac,[2,54]),aa(ac,[2,55],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d}),aa(ac,[2,56],{53:J,59:H,64:G,65:F,66:E,67:D,68:C,69:B,70:z,71:y,72:i,73:h,74:f,75:e,76:d})],defaultActions:{5:[2,4],6:[2,5],7:[2,6],9:[2,31],11:[2,42],29:[2,2],34:[2,32],66:[2,1],70:[2,29],71:[2,94],72:[2,40]},parseError:function n(ap,ao){if(ao.recoverable){this.trace(ap)}else{var o=new Error(ap);o.hash=ao;throw o}},parse:function v(az){var aH=this,aw=[0],aG=[],aR=[null],aB=[],aT=this.table,ap="",aA=0,aP=0,ar=0,ay=2,aF=1;var at=aB.slice.call(arguments,1);var o=Object.create(this.lexer);var aS={yy:{}};for(var aO in this.yy){if(Object.prototype.hasOwnProperty.call(this.yy,aO)){aS.yy[aO]=this.yy[aO]}}o.setInput(az,aS.yy);aS.yy.lexer=o;aS.yy.parser=this;if(typeof o.yylloc=="undefined"){o.yylloc={}}var aq=o.yylloc;aB.push(aq);var au=o.options&&o.options.ranges;if(typeof aS.yy.parseError==="function"){this.parseError=aS.yy.parseError}else{this.parseError=Object.getPrototypeOf(this).parseError}function aE(aV){aw.length=aw.length-2*aV;aR.length=aR.length-aV;aB.length=aB.length-aV}_token_stack:var aD=function(){var aV;aV=o.lex()||aF;if(typeof aV!=="number"){aV=aH.symbols_[aV]||aV}return aV};var aN,aJ,av,aM,aU,aC,aL={},aI,aQ,ao,ax;while(true){av=aw[aw.length-1];if(this.defaultActions[av]){aM=this.defaultActions[av]}else{if(aN===null||typeof aN=="undefined"){aN=aD()}aM=aT[av]&&aT[av][aN]}if(typeof aM==="undefined"||!aM.length||!aM[0]){var aK="";ax=[];for(aI in aT[av]){if(this.terminals_[aI]&&aI>ay){ax.push("'"+this.terminals_[aI]+"'")}}if(o.showPosition){aK="Parse error on line "+(aA+1)+":\n"+o.showPosition()+"\nExpecting "+ax.join(", ")+", got '"+(this.terminals_[aN]||aN)+"'"}else{aK="Parse error on line "+(aA+1)+": Unexpected "+(aN==aF?"end of input":"'"+(this.terminals_[aN]||aN)+"'")}this.parseError(aK,{text:o.match,token:this.terminals_[aN]||aN,line:o.yylineno,loc:aq,expected:ax})}if(aM[0] instanceof Array&&aM.length>1){throw new Error("Parse Error: multiple actions possible at state: "+av+", token: "+aN)}switch(aM[0]){case 1:aw.push(aN);aR.push(o.yytext);aB.push(o.yylloc);aw.push(aM[1]);aN=null;if(!aJ){aP=o.yyleng;ap=o.yytext;aA=o.yylineno;aq=o.yylloc;if(ar>0){ar--}}else{aN=aJ;aJ=null}break;case 2:aQ=this.productions_[aM[1]][1];aL.$=aR[aR.length-aQ];aL._$={first_line:aB[aB.length-(aQ||1)].first_line,last_line:aB[aB.length-1].last_line,first_column:aB[aB.length-(aQ||1)].first_column,last_column:aB[aB.length-1].last_column};if(au){aL._$.range=[aB[aB.length-(aQ||1)].range[0],aB[aB.length-1].range[1]]}aC=this.performAction.apply(aL,[ap,aP,aA,aS.yy,aM[1],aR,aB].concat(at));if(typeof aC!=="undefined"){return aC}if(aQ){aw=aw.slice(0,-1*aQ*2);aR=aR.slice(0,-1*aQ);aB=aB.slice(0,-1*aQ)}aw.push(this.productions_[aM[1]][0]);aR.push(aL.$);aB.push(aL._$);ao=aT[aw[aw.length-2]][aw[aw.length-1]];aw.push(ao);break;case 3:return true}}return true}};var A={STATEMENT_TYPES:{SELECT:"select",UPDATE:"update",INSERT:"insert",DELETE:"delete"},TOKEN_TYPES:{STATEMENT:"statement",TABLE_REFERENCE:"table_reference",EXPRESSION:"expression",FIELDS_LIST:"fields_list",FIELD:"field",UPDATE_FIELD:"update_field",OPTION_DELAYED:"delayed_option",OPTION_LIMIT:"limit_option",OPTION_ORDERING:"order_by_option",ORDER_EXPRESSION:"order_by_expression"},EXPRESSION:{NUMBER:"number",BOOLEAN:"boolean",NULL:"null",STRING:"string",UNARY:"unary",LOGICAL:"logical",MATH:"math",GROUP:"group",IDENTIFIER:"identifier",BINDING:"binding",FUNCTION_CALL:"function_call"},OPERATOR:{NOT:"!",INVERT:"-",OR:"||",AND:"&&",EQUALS:"=",IS:"is",IN:"in",LIKE:"like",DIFFERENT:"<>",LTE:"<=",LT:"<",GTE:">=",GT:">",MULTIPLY:"*",DIVISION:"/",ADDITION:"+",DIFFERENCE:"-"},ORDERING_STRATEGY:{RANDOM:"random",ORDERED:"ordered"},ORDER_DIRECTION:{ASCENDING:"asc",DESCENDING:"desc"},FIELD_TYPES:{ALL_FIELDS:"all",SPECIFIC_FIELDS:"enumeration"},unescapeIdentifier:function(o){return String(o||"").replace(/^`([\S]+)`$/,"$1")},unescapeBindingName:function(o){return String(o||"").replace(/^\:/,"")},parseBoolean:function(o){return String(o||"").toLowerCase()==="true"},parseNumber:function(o){return Number(o)},parseString:function(ap){if("string"!==typeof ap){throw new Error("Invalid argument: string expected!")}var av=ap.length,ar=ap.charAt(0),ao=ap.charAt(av-1),at,au,o="";if(av<2||ar!=ao||(ar!=="'"&&ar!=='"')){throw new Error("Failed to parse string! Please report this bug!")}for(var aq=1;aq<av-1;aq++){at=ap.charAt(aq);if("\\"===at){au=ap.charAt(aq+1);switch(au){case"r":o+="\r";break;case"t":o+="\t";break;case"n":o+="\n";break;case"\\":o+="\\";break;case"":throw new Error("Unexpected string termination!");break;default:o+=au;break}aq++}else{o+=at}}return o},createFieldAliasFromExpression:function(o){switch(o.type){case"string":case"boolean":case"number":return String(o.value);case"null":return"null";default:return null}}};var ab=(function(){var ap=({EOF:1,parseError:function aq(az,ay){if(this.yy.parser){this.yy.parser.parseError(az,ay)}else{throw new Error(az)}},setInput:function(ay,az){this.yy=az||this.yy||{};this._input=ay;this._more=this._backtrack=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges){this.yylloc.range=[0,0]}this.offset=0;return this},input:function(){var az=this._input[0];this.yytext+=az;this.yyleng++;this.offset++;this.match+=az;this.matched+=az;var ay=az.match(/(?:\r\n?|\n).*/g);if(ay){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges){this.yylloc.range[1]++}this._input=this._input.slice(1);return az},unput:function(aA){var ay=aA.length;var az=aA.split(/(?:\r\n?|\n)/g);this._input=aA+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-ay);this.offset-=ay;var aC=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(az.length-1){this.yylineno-=az.length-1}var aB=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:az?(az.length===aC.length?this.yylloc.first_column:0)+aC[aC.length-az.length].length-az[0].length:this.yylloc.first_column-ay};if(this.options.ranges){this.yylloc.range=[aB[0],aB[0]+this.yyleng-ay]}this.yyleng=this.yytext.length;return this},more:function(){this._more=true;return this},reject:function(){if(this.options.backtrack_lexer){this._backtrack=true}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}return this},less:function(ay){this.unput(this.match.slice(ay))},pastInput:function(){var ay=this.matched.substr(0,this.matched.length-this.match.length);return(ay.length>20?"...":"")+ay.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var ay=this.match;if(ay.length<20){ay+=this._input.substr(0,20-ay.length)}return(ay.substr(0,20)+(ay.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var ay=this.pastInput();var az=new Array(ay.length+1).join("-");return ay+this.upcomingInput()+"\n"+az+"^"},test_match:function(aC,aA){var aD,ay,aB;if(this.options.backtrack_lexer){aB={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){aB.yylloc.range=this.yylloc.range.slice(0)}}ay=aC[0].match(/(?:\r\n?|\n).*/g);if(ay){this.yylineno+=ay.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:ay?ay[ay.length-1].length-ay[ay.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+aC[0].length};this.yytext+=aC[0];this.match+=aC[0];this.matches=aC;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(aC[0].length);this.matched+=aC[0];aD=this.performAction.call(this,this.yy,this,aA,this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input){this.done=false}if(aD){return aD}else{if(this._backtrack){for(var az in aB){this[az]=aB[az]}return false}}return false},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var aC,aA,ay,az;if(!this._more){this.yytext="";this.match=""}var aD=this._currentRules();for(var aB=0;aB<aD.length;aB++){ay=this._input.match(this.rules[aD[aB]]);if(ay&&(!aA||ay[0].length>aA[0].length)){aA=ay;az=aB;if(this.options.backtrack_lexer){aC=this.test_match(ay,aD[aB]);if(aC!==false){return aC}else{if(this._backtrack){aA=false;continue}else{return false}}}else{if(!this.options.flex){break}}}}if(aA){aC=this.test_match(aA,aD[az]);if(aC!==false){return aC}return false}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function o(){var ay=this.next();if(ay){return ay}else{return this.lex()}},begin:function ao(ay){this.conditionStack.push(ay)},popState:function ar(){var ay=this.conditionStack.length-1;if(ay>0){return this.conditionStack.pop()}else{return this.conditionStack[0]}},_currentRules:function ax(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}else{return this.conditions.INITIAL.rules}},topState:function av(ay){ay=this.conditionStack.length-1-Math.abs(ay||0);if(ay>=0){return this.conditionStack[ay]}else{return"INITIAL"}},pushState:function au(ay){this.begin(ay)},stateStackSize:function at(){return this.conditionStack.length},options:{"case-insensitive":true},performAction:function aw(aC,az,aB,ay){var aA=ay;switch(aB){case 0:break;case 1:return 34;break;case 2:return 34;break;case 3:return 60;break;case 4:return 61;break;case 5:return 62;break;case 6:return 62;break;case 7:return 12;break;case 8:return 31;break;case 9:return 43;break;case 10:return 47;break;case 11:return 4;break;case 12:return 16;break;case 13:return 19;break;case 14:return 26;break;case 15:return 29;break;case 16:return 57;break;case 17:return 36;break;case 18:return 33;break;case 19:return 13;break;case 20:return 22;break;case 21:return 23;break;case 22:return 82;break;case 23:return 85;break;case 24:return 85;break;case 25:return 86;break;case 26:return 86;break;case 27:return 44;break;case 28:return 45;break;case 29:return 77;break;case 30:return 79;break;case 31:return 53;break;case 32:return 74;break;case 33:return 75;break;case 34:return 64;break;case 35:return 63;break;case 36:return 66;break;case 37:return 70;break;case 38:return 71;break;case 39:return 72;break;case 40:return 73;break;case 41:return 59;break;case 42:return 76;break;case 43:return 68;break;case 44:return 69;break;case 45:return 67;break;case 46:return 67;break;case 47:return 65;break;case 48:return 65;break;case 49:return 56;break;case 50:return 51;break;case 51:return 52;break;case 52:return 81;break;case 53:return 6;break;case 54:return"INVALID";break}},rules:[/^(?:\s+)/i,/^(?:[0-9]+\.[0-9]*|[0-9]*\.[0-9]+\b)/i,/^(?:[0-9]+)/i,/^(?:true|false\b)/i,/^(?:null\b)/i,/^(?:"(\\["]|[^"])*")/i,/^(?:'(\\[']|[^'])*')/i,/^(?:select\b)/i,/^(?:update\b)/i,/^(?:insert\b)/i,/^(?:delete\b)/i,/^(?:remote\b)/i,/^(?:from\b)/i,/^(?:where\b)/i,/^(?:limit\b)/i,/^(?:union\b)/i,/^(?:as\b)/i,/^(?:set\b)/i,/^(?:delayed\b)/i,/^(?:sql_calc_found_rows\b)/i,/^(?:order\b)/i,/^(?:by\b)/i,/^(?:random\b)/i,/^(?:asc\b)/i,/^(?:ascending\b)/i,/^(?:desc\b)/i,/^(?:descending\b)/i,/^(?:ignore\b)/i,/^(?:into\b)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:!)/i,/^(?:<>)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:=)/i,/^(?:in\b)/i,/^(?:is\b)/i,/^(?:like\b)/i,/^(?:&&)/i,/^(?:and\b)/i,/^(?:\|\|)/i,/^(?:or\b)/i,/^(?:,)/i,/^(?:[A-Za-z_\$][A-Za-z0-9_]*)/i,/^(?:`[A-Za-z_\$][A-Za-z0-9_]*`)/i,/^(?::[A-Za-z_\$][A-Za-z0-9_]*)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],inclusive:true}}});return ap})();I.lexer=ab;function g(){this.yy={}}g.prototype=I;I.Parser=g;return new g})();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=JQLGrammar;exports.Parser=JQLGrammar.Parser;exports.parse=function(){return JQLGrammar.parse.apply(JQLGrammar,arguments)};exports.main=function commonjsMain(a){if(!a[1]){console.log("Usage: "+a[0]+" FILE");process.exit(1)}var b=require("fs").readFileSync(require("path").normalize(a[1]),"utf8");return exports.parser.parse(b)};if(typeof module!=="undefined"&&require.main===module){exports.main(process.argv.slice(1))}};