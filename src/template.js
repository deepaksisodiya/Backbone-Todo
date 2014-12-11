templates = {};
templates["todoList.html"] = function(obj) {
  var __t, __p = '',
    __j = Array.prototype.join,
    print = function() {
      __p += __j.call(arguments, '');
    };
  with(obj || {}) {
    __p += '';
    _.each(obj.list, function(item, index, array) {
      __p += '';
      if (obj.mode === "all" || (obj.mode === "completed" && item.get("completed") === true) || (obj.mode === "remaining" && item.get("completed") === false)) {
        __p += '<div><div class="row"><div class="col-sm-1"><input ';
        if (item.get("completed")) {
          __p += 'checked ';
        }
        __p += 'type="checkbox" id="todoCheckbox" data-index="' +
          ((__t = (index)) == null ? '' : __t) +
          '"></div><div class="col-sm-9"><label ';
        if (item.get("completed")) {
          __p += 'class="completed" ';
        }
        __p += '>' +
          ((__t = (item.get("title"))) == null ? '' : __t) +
          '<span ';
        if (item.get("completed")) {
          __p += 'class="glyphicon glyphicon-ok"';
        }
        __p += '></span></label></div><div class="col-sm-1"><button data-index="' +
          ((__t = (index)) == null ? '' : __t) +
          '"  class="btn btn-success" id="remove">x</button></div></div></div>';
      }
      __p += '';
    })
    __p += '';
  }
  return __p;
};
templates["todoFooter.html"] = function(obj) {
  var __t, __p = '',
    __j = Array.prototype.join,
    print = function() {
      __p += __j.call(arguments, '');
    };
  with(obj || {}) {
    __p += '<a href="#all" class="removeUnderLine">All (' +
      ((__t = (obj.completed().length + obj.remaining().length)) == null ? '' : __t) +
      ') </a><a href="#completed" class="removeUnderLine">Completed (' +
      ((__t = (obj.completed().length)) == null ? '' : __t) +
      ')</a><a href="#remaining" class="removeUnderLine">Remaining (' +
      ((__t = (obj.remaining().length)) == null ? '' : __t) +
      ')</a><button id="removeCompleted" class="btn btn-success">Remove Completed</button>';
  }
  return __p;
};
templates["todoCreater.html"] = function(obj) {
  var __t, __p = '',
    __j = Array.prototype.join,
    print = function() {
      __p += __j.call(arguments, '');
    };
  with(obj || {}) {
    __p += '<div class="row"><div class="col-sm-4"></div><div class="col-sm-4"><input class="form-control" id="input-todo" placeholder="What needs to be done"></div><div class="col-sm-4"></div></div>';
  }
  return __p;
};
