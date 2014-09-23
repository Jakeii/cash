
_.serialize = function(){
    var form = this[0];
    var field, query="";
    for(var i=form.elements.length-1; i>=0; i--){
        field = form.elements[i];
        if(field.name && field.type !== "file" && field.type !== "reset"){
            if(field.type === "select-multiple"){
                for(var j=form.elements[i].options.length-1; j>=0; j--){
                    if(field.options[j].selected){
                        query += "&" + field.name + "=" + encodeURIComponent(field.options[j].value).replace(/%20/g,"+");
                    }
                }
            }
            else{
                if((field.type !== "submit" && field.type !== "button")){
                    query += "&" + field.name + "=" + encodeURIComponent(field.value).replace(/%20/g,"+");
                }
            }
        }
    }
    return query.substr(1);
};

_.val = function(value){
    if(typeof value === undefined) {
      return this[0].value;
    } else {
      this.each(function(v){
        v.value = value;
      });
      return this;
    }
};