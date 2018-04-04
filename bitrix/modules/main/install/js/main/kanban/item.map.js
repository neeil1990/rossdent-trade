{"version":3,"file":"item.min.js","sources":["item.js"],"names":["BX","namespace","Kanban","Item","options","type","isPlainObject","Error","this","Utils","isValidId","id","grid","columnId","layout","container","dragTarget","bodyContainer","dragElement","draggable","droppable","countable","visible","data","Object","create","setOptions","prototype","getId","getColumnId","setColumnId","getColumn","getGrid","setGrid","Grid","setData","isBoolean","getData","isCountable","isVisible","getGridData","renderLayout","getBodyContainer","cleanNode","appendChild","render","getContainer","attrs","className","data-id","data-type","children","getDragTarget","makeDraggable","makeDroppable","getDragElement","content","props","style","borderLeft","getColor","textContent","dispose","jsDD","unregisterDest","unregisterObject","isDraggable","itemContainer","onbxdragstart","delegate","onDragStart","onbxdrag","onDrag","onbxdragstop","onDragStop","registerObject","isDroppable","onbxdestdraghover","onDragEnter","onbxdestdraghout","onDragLeave","onbxdestdragfinish","onDragDrop","onbxdestdragstop","onItemDragEnd","registerDest","getDragMode","DragMode","ITEM","disableDropping","disableDragging","enableDragging","disableDest","enableDropping","enableDest","canSortItems","classList","add","cloneNode","position","width","offsetWidth","document","body","onCustomEvent","x","y","remove","left","top","itemNode","draggableItem","getItemByElement","showDragTarget","offsetHeight","hideDragTarget","event","DragEvent","setItem","setTargetColumn","setTargetItem","isActionAllowed","success","moveItem","height","removeProperty","DraftItem","apply","arguments","asyncEventStarted","draftContainer","draftTextArea","addToColumn","column","targetItem","Column","getItem","targetId","newItem","addItem","focusDraftTextArea","__proto__","constructor","getDraftTextArea","addCustomEvent","proxy","applyDraftEditMode","placeholder","getMessage","events","blur","handleDraftTextAreaBlur","bind","keydown","handleDraftTextAreaKeyDown","title","util","trim","value","length","removeDraftItem","disabled","promise","getEventPromise","onItemAddedFulfilled","onItemAddedRejected","fulfill","result","getNextItemSibling","NONE","nextItem","error","removeCustomEvent","removeItem","focus","setTimeout","keyCode"],"mappings":"CAAC,WAED,YAEAA,IAAGC,UAAU,YASbD,IAAGE,OAAOC,KAAO,SAASC,GAEzB,IAAKJ,GAAGK,KAAKC,cAAcF,GAC3B,CACC,KAAM,IAAIG,OAAM,+CAGjBC,KAAKJ,QAAUA,CAEf,KAAKJ,GAAGE,OAAOO,MAAMC,UAAUN,EAAQO,IACvC,CACC,KAAM,IAAIJ,OAAM,gDAGjBC,KAAKG,GAAKP,EAAQO,EAGlBH,MAAKI,KAAO,IAEZJ,MAAKK,SAAW,IAEhBL,MAAKM,QACJC,UAAW,KACXC,WAAY,KACZC,cAAe,KAIhBT,MAAKU,YAAc,IACnBV,MAAKW,UAAY,IACjBX,MAAKY,UAAY,IAEjBZ,MAAKa,UAAY,IACjBb,MAAKc,QAAU,IAEfd,MAAKe,KAAOC,OAAOC,OAAO,KAE1BjB,MAAKkB,WAAWtB,GAGjBJ,IAAGE,OAAOC,KAAKwB,WAMdC,MAAO,WAEN,MAAOpB,MAAKG,IAObkB,YAAa,WAEZ,MAAOrB,MAAKK,UAGbiB,YAAa,SAASjB,GAErBL,KAAKK,SAAWA,GAOjBkB,UAAW,WAEV,GAAIvB,KAAKwB,UACT,CACC,MAAOxB,MAAKwB,UAAUD,UAAUvB,KAAKqB,eAGtC,MAAO,OAMRI,QAAS,SAASrB,GAEjB,GAAIA,YAAgBZ,IAAGE,OAAOgC,KAC9B,CACC1B,KAAKI,KAAOA,IAOdoB,QAAS,WAER,MAAOxB,MAAKI,MAGbc,WAAY,SAAStB,GAEpB,IAAKA,EACL,CACC,OAGDI,KAAK2B,QAAQ/B,EAAQmB,KACrBf,MAAKY,UAAYpB,GAAGK,KAAK+B,UAAUhC,EAAQgB,WAAahB,EAAQgB,UAAYZ,KAAKY,SACjFZ,MAAKW,UAAYnB,GAAGK,KAAK+B,UAAUhC,EAAQe,WAAaf,EAAQe,UAAYX,KAAKW,SACjFX,MAAKa,UAAYrB,GAAGK,KAAK+B,UAAUhC,EAAQiB,WAAajB,EAAQiB,UAAYb,KAAKa,SACjFb,MAAKc,QAAUtB,GAAGK,KAAK+B,UAAUhC,EAAQkB,SAAWlB,EAAQkB,QAAUd,KAAKc,SAG5Ee,QAAS,WAER,MAAO7B,MAAKe,MAGbY,QAAS,SAASZ,GAEjB,GAAIvB,GAAGK,KAAKC,cAAciB,GAC1B,CACCf,KAAKe,KAAOA,IAIde,YAAa,WAEZ,MAAO9B,MAAKa,WAGbkB,UAAW,WAEV,MAAO/B,MAAKc,SAGbkB,YAAa,WAEZ,MAAOhC,MAAKwB,UAAUK,WAOvBI,aAAc,WAEb,GAAIxB,GAAgBT,KAAKkC,kBACzB1C,IAAG2C,UAAU1B,EACbA,GAAc2B,YAAYpC,KAAKqC,SAC/B,OAAOrC,MAAKsC,gBAMbA,aAAc,WAEb,GAAItC,KAAKM,OAAOC,YAAc,KAC9B,CACC,MAAOP,MAAKM,OAAOC,UAGpBP,KAAKM,OAAOC,UAAYf,GAAGyB,OAAO,OACjCsB,OACCC,UAAW,mBACXC,UAAWzC,KAAKoB,QAChBsB,YAAa,QAEdC,UACC3C,KAAK4C,gBACL5C,KAAKkC,qBAIPlC,MAAK6C,eACL7C,MAAK8C,eAEL,OAAO9C,MAAKM,OAAOC,WAOpBqC,cAAe,WAEd,IAAK5C,KAAKM,OAAOE,WACjB,CACCR,KAAKM,OAAOE,WAAahB,GAAGyB,OAAO,OAClCsB,OACCC,UAAW,kCAKd,MAAOxC,MAAKM,OAAOE,YAOpBuC,eAAgB,WAEf,MAAO/C,MAAKU,aAGbwB,iBAAkB,WAEjB,IAAKlC,KAAKM,OAAOG,cACjB,CACCT,KAAKM,OAAOG,cAAgBjB,GAAGyB,OAAO,OACrCsB,OACCC,UAAW,8BAKd,MAAOxC,MAAKM,OAAOG,eAQpB4B,OAAQ,WAEP,IAAKrC,KAAKM,OAAO0C,QACjB,CACChD,KAAKM,OAAO0C,QAAUxD,GAAGyB,OAAO,OAC/BgC,OACCT,UAAW,8BAKdxC,KAAKM,OAAO0C,QAAQE,MAAMC,WAAa,cAAgBnD,KAAKuB,YAAY6B,UACxEpD,MAAKM,OAAO0C,QAAQK,YAAc,IAAMrD,KAAKoB,OAE7C,OAAOpB,MAAKM,OAAO0C,SAGpBM,QAAS,WAERC,KAAKC,eAAexD,KAAKsC,eACzBiB,MAAKE,iBAAiBzD,KAAKsC,iBAG5BO,cAAe,WAEd,IAAK7C,KAAK0D,cACV,CACC,OAGD,GAAIC,GAAgB3D,KAAKsC,cAGzBqB,GAAcC,cAAgBpE,GAAGqE,SAAS7D,KAAK8D,YAAa9D,KAC5D2D,GAAcI,SAAWvE,GAAGqE,SAAS7D,KAAKgE,OAAQhE,KAClD2D,GAAcM,aAAezE,GAAGqE,SAAS7D,KAAKkE,WAAYlE,KAE1DuD,MAAKY,eAAeR,IAGrBb,cAAe,WAEd,IAAK9C,KAAKoE,cACV,CACC,OAGD,GAAIT,GAAgB3D,KAAKsC,cAEzBqB,GAAcU,kBAAoB7E,GAAGqE,SAAS7D,KAAKsE,YAAatE,KAChE2D,GAAcY,iBAAmB/E,GAAGqE,SAAS7D,KAAKwE,YAAaxE,KAC/D2D,GAAcc,mBAAqBjF,GAAGqE,SAAS7D,KAAK0E,WAAY1E,KAEhE2D,GAAcgB,iBAAmBnF,GAAGqE,SAAS7D,KAAK4E,cAAe5E,KAEjEuD,MAAKsB,aAAalB,EAAe,GAEjC,IAAI3D,KAAKwB,UAAUsD,gBAAkBtF,GAAGE,OAAOqF,SAASC,KACxD,CAEChF,KAAKiF,oBAIPC,gBAAiB,WAEhB,GAAIlF,KAAK0D,cACT,CACCH,KAAKE,iBAAiBzD,KAAKsC,kBAI7B6C,eAAgB,WAEf,GAAInF,KAAK0D,cACT,CACCH,KAAKY,eAAenE,KAAKsC,kBAI3B2C,gBAAiB,WAEhB,GAAIjF,KAAKoE,cACT,CACCb,KAAK6B,YAAYpF,KAAKsC,kBAIxB+C,eAAgB,WAEf,GAAIrF,KAAKoE,cACT,CACCb,KAAK+B,WAAWtF,KAAKsC,kBAQvBoB,YAAa,WAEZ,MAAO1D,MAAKW,WAAaX,KAAKwB,UAAU+D,gBAOzCnB,YAAa,WAEZ,MAAOpE,MAAKY,WAGbkD,YAAa,WAEZ9D,KAAKsC,eAAekD,UAAUC,IAAI,4BAElC,KAAKzF,KAAKU,YACV,CACC,GAAIiD,GAAgB3D,KAAKsC,cACzB,IAAI7B,GAAgBT,KAAKkC,kBAEzBlC,MAAKU,YAAciD,EAAc+B,UAAU,KAE3C1F,MAAKU,YAAYwC,MAAMyC,SAAW,UAClC3F,MAAKU,YAAYwC,MAAM0C,MAAQnF,EAAcoF,YAAc,IAC3D7F,MAAKU,YAAY8B,UAAY,wCAE7BsD,UAASC,KAAK3D,YAAYpC,KAAKU,aAGhClB,GAAGwG,cAAchG,KAAKwB,UAAW,+BAAgCxB,QAQlEkE,WAAY,SAAS+B,EAAGC,GAEvB1G,GAAGwG,cAAchG,KAAKwB,UAAW,8BAA+BxB,MAEhEA,MAAKsC,eAAekD,UAAUW,OAAO,4BACrC3G,IAAG2G,OAAOnG,KAAKU,YACfV,MAAKU,YAAc,MAQpBsD,OAAQ,SAASiC,EAAGC,GAEnB,GAAIlG,KAAKU,YACT,CACCV,KAAKU,YAAYwC,MAAMkD,KAAOH,EAAI,IAClCjG,MAAKU,YAAYwC,MAAMmD,IAAMH,EAAI,OAUnC5B,YAAa,SAASgC,EAAUL,EAAGC,GAElC,GAAIK,GAAgBvG,KAAKwB,UAAUgF,iBAAiBF,EACpD,IAAIC,IAAkBvG,KACtB,CACCA,KAAKyG,eAAeF,EAAcrE,mBAAmBwE,gBAUvDlC,YAAa,SAAS8B,EAAUL,EAAGC,GAElClG,KAAK2G,kBASNjC,WAAY,SAAS4B,EAAUL,EAAGC,GAEjClG,KAAK2G,gBACL,IAAIJ,GAAgBvG,KAAKwB,UAAUgF,iBAAiBF,EAEpD,IAAIM,GAAQ,GAAIpH,IAAGE,OAAOmH,SAC1BD,GAAME,QAAQP,EACdK,GAAMG,gBAAgB/G,KAAKuB,YAC3BqF,GAAMI,cAAchH,KAEpBR,IAAGwG,cAAchG,KAAKwB,UAAW,iCAAkCoF,GACnE,KAAKA,EAAMK,kBACX,CACC,OAGD,GAAIC,GAAUlH,KAAKwB,UAAU2F,SAASZ,EAAevG,KAAKuB,YAAavB,KACvE,IAAIkH,EACJ,CACC1H,GAAGwG,cAAchG,KAAKwB,UAAW,2BAA4B+E,EAAevG,KAAKuB,YAAavB,SAUhG4E,cAAe,SAAS0B,EAAUL,EAAGC,GAEpClG,KAAKiF,mBAONwB,eAAgB,SAASW,GAExBpH,KAAKsC,eAAekD,UAAUC,IAAI,gCAClCzF,MAAK4C,gBAAgBM,MAAMkE,OAASA,EAAS,MAG9CT,eAAgB,WAEf3G,KAAKsC,eAAekD,UAAUW,OAAO,gCACrCnG,MAAK4C,gBAAgBM,MAAMmE,eAAe,WAY5C7H,IAAGE,OAAO4H,UAAY,SAAS1H,GAE9BJ,GAAGE,OAAOC,KAAK4H,MAAMvH,KAAMwH,UAC3BxH,MAAKyH,kBAAoB,KACzBzH,MAAK0H,eAAiB,IACtB1H,MAAK2H,cAAgB,KAUtBnI,IAAGE,OAAO4H,UAAUM,YAAc,SAASC,EAAQC,GAElD,IAAKD,YAAkBrI,IAAGE,OAAOqI,OACjC,CACC,MAAO,MAGR,GAAI5H,GAAK,mBAAqB0H,EAAOzG,OACrC,IAAIyG,EAAOrG,UAAUwG,QAAQ7H,GAC7B,CACC,MAAO,MAGR,GAAI8H,GAAW,IACf,IAAIH,YAAsBtI,IAAGE,OAAOC,MAAQmI,EAAWvG,cAAgBsG,EACvE,CACCI,EAAWH,EAGZ,GAAII,GAAUL,EAAOrG,UAAU2G,SAC9BhI,GAAIA,EACJN,KAAM,sBACNQ,SAAUwH,EAAOzG,QACjBT,UAAW,MACXC,UAAW,MACXC,UAAW,MACXoH,SAAUA,GAGX,IAAIC,EACJ,CACCA,EAAQE,qBAGT,MAAOF,GAGR1I,IAAGE,OAAO4H,UAAUnG,WACnBkH,UAAW7I,GAAGE,OAAOC,KAAKwB,UAC1BmH,YAAa9I,GAAGE,OAAO4H,UAKvBjF,OAAQ,WAEP,GAAIrC,KAAK0H,eACT,CACC,MAAO1H,MAAK0H,eAGb1H,KAAK0H,eAAiBlI,GAAGyB,OAAO,OAC/BgC,OACCT,UAAW,0BAEZG,UACC3C,KAAKuI,qBAIP,OAAOvI,MAAK0H,gBAQbjG,QAAS,SAASrB,GAEjBZ,GAAGE,OAAOC,KAAKwB,UAAUM,QAAQ8F,MAAMvH,KAAMwH,UAC7ChI,IAAGgJ,eAAexI,KAAKwB,UAAW,8BAA+BhC,GAAGiJ,MAAMzI,KAAK0I,mBAAoB1I,QAOpGuI,iBAAkB,WAEjB,GAAIvI,KAAK2H,cACT,CACC,MAAO3H,MAAK2H,cAGb3H,KAAK2H,cAAgBnI,GAAGyB,OAAO,YAC9BsB,OACCC,UAAW,kCACXmG,YAAa3I,KAAKwB,UAAUoH,WAAW,2BAExCC,QACCC,KAAM9I,KAAK+I,wBAAwBC,KAAKhJ,MACxCiJ,QAASjJ,KAAKkJ,2BAA2BF,KAAKhJ,QAIhD,OAAOA,MAAK2H,eAGbe,mBAAoB,WAEnB,GAAI1I,KAAKyH,kBACT,CACC,OAGDzH,KAAKyH,kBAAoB,IAEzB,IAAI0B,GAAQ3J,GAAG4J,KAAKC,KAAKrJ,KAAKuI,mBAAmBe,MACjD,KAAKH,EAAMI,OACX,CACCvJ,KAAKwJ,iBACL,QAGDxJ,KAAK2B,SAAUwH,MAAOA,GACtBnJ,MAAKsC,eAAekD,UAAUC,IAAI,kCAClCzF,MAAKuI,mBAAmBkB,SAAW,IAEnC,IAAIC,GAAU1J,KAAKwB,UAAUmI,gBAC5B,+BACA,KACA3J,KAAK4J,qBAAqBZ,KAAKhJ,MAC/BA,KAAK6J,oBAAoBb,KAAKhJ,MAG/B0J,GAAQI,QAAQ9J,OAGjB4J,qBAAsB,SAASG,GAE9B,IAAKvK,GAAGK,KAAKC,cAAciK,GAC3B,CACC/J,KAAKwJ,iBACL,QAGD,IAAKhK,GAAGE,OAAOO,MAAMC,UAAU6J,EAAO9B,UACtC,CACC,GAAIH,GAAa9H,KAAKuB,YAAYyI,mBAAmBhK,KACrD,IAAI8H,EACJ,CACCiC,EAAO9B,SAAWH,EAAW1G,SAI/BpB,KAAKwJ,iBACL,IAAItB,GAAUlI,KAAKwB,UAAU2G,QAAQ4B,EACrC,IAAI7B,GAAWlI,KAAKwB,UAAUsD,gBAAkBtF,GAAGE,OAAOqF,SAASkF,KACnE,CACC,GAAIC,GAAWhC,EAAQ3G,YAAYyI,mBAAmB9B,EACtD1I,IAAGE,OAAO4H,UAAUM,YAAYM,EAAQ3G,YAAa2I,KAIvDL,oBAAqB,SAASM,GAE7BnK,KAAKwJ,mBAGNA,gBAAiB,WAEhBxJ,KAAKyH,kBAAoB,IACzBjI,IAAG4K,kBAAkBpK,KAAKwB,UAAW,8BAA+BhC,GAAGiJ,MAAMzI,KAAK0I,mBAAoB1I,MACtGA,MAAKwB,UAAU6I,WAAWrK,OAG3BoI,mBAAoB,WAEnBpI,KAAKuI,mBAAmB+B,SAGzBvB,wBAAyB,SAASnC,GAIjC2D,WAAW,WACVvK,KAAK0I,sBACJM,KAAKhJ,MAAO,IAGfkJ,2BAA4B,SAAStC,GAEpC,GAAIA,EAAM4D,UAAY,GACtB,CACCxK,KAAK0I,yBAED,IAAI9B,EAAM4D,UAAY,GAC3B,CACCxK,KAAKwJ"}