System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, MyView;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      MyView = _export("MyView", (function () {
        function MyView() {
          _classCallCheck(this, MyView);

          this.getsByClass = document.getElementsByClassName;
        }

        _prototypeProperties(MyView, null, {
          activate: {
            value: function activate() {
              var pagehost = document.getElementsByClassName("page-host")[0];
              pagehost.onscroll = this.scroll;
            },
            writable: true,
            configurable: true
          },
          scroll: {
            value: function scroll() {
              var pagehost = document.getElementsByClassName("page-host")[0];
              var yvalue = document.getElementById("scroll");
              var container = document.getElementsByClassName("scrollcontainer")[0];
              var first = document.getElementsByClassName("first")[0];
              var second = document.getElementsByClassName("second")[0];
              var third = document.getElementsByClassName("third")[0];
              var fourth = document.getElementsByClassName("fourth")[0];
              var y = pagehost.scrollTop;
              yvalue.innerText = y;
              var children = container.children;
              for (var i = 0; i < children.length; i++) {
                children[i].classList.add("hide");
              }
              var h = 200;
              if (0 <= y && y <= h * 1) {
                first.classList.remove("hide");
              } else if (h * 1 < y && y <= h * 2) {
                second.classList.remove("hide");
              } else if (h * 2 < y && y <= h * 3) {
                third.classList.remove("hide");
              } else if (h * 3 < y && y <= h * 4) {
                fourth.classList.remove("hide");
              }
            },
            writable: true,
            configurable: true
          },
          hide_all: {
            value: function hide_all() {
              var container = document.getElementsByClassName("scrollcontainer")[0];
              var children = container.children;
              for (var i = 0; i < children.length; i++) {
                children[i].classList.add("hide");
              }
            },
            writable: true,
            configurable: true
          }
        });

        return MyView;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15dmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsTUFBTTs7Ozs7Ozs7QUFBTixZQUFNO0FBQ1AsaUJBREMsTUFBTTtnQ0FBTixNQUFNOztBQUVqQixjQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztTQUNuRDs7NkJBSFcsTUFBTTtBQUtsQixrQkFBUTttQkFBQSxvQkFBRTtBQUNULGtCQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0Qsc0JBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNoQzs7OztBQUVELGdCQUFNO21CQUFBLGtCQUFHO0FBQ1Isa0JBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxrQkFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQyxrQkFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsa0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxrQkFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELGtCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsa0JBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxrQkFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUMzQixvQkFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDckIsa0JBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLHdCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztlQUNsQztBQUNELGtCQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDWixrQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFO0FBQ3ZCLHFCQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztlQUMvQixNQUFNLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUU7QUFDL0Isc0JBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2VBQ2hDLE1BQU0sSUFBSSxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRTtBQUMvQixxQkFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7ZUFDL0IsTUFBTSxJQUFJLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFO0FBQy9CLHNCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztlQUNoQzthQUVEOzs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDVixrQkFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsa0JBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLHdCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztlQUNsQzthQUNEOzs7Ozs7ZUEzQ1csTUFBTSIsImZpbGUiOiJteXZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==