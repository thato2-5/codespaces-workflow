!function(n) {
	var e = {};
	function t(r) {
		if (e[r])
			return e[r].exports;
		var o = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return n[r].call(o.exports, o, o.exports, t),
		o.l = !0,
		o.exports
	}
	t.m = n,
	t.c = e,
	t.d = function(n, e, r) {
		t.o(n, e) || Object.defineProperty(n, e, {
			enumerable: !0,
			get: r
		})
	},
	t.r = function(n) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(n, "__esModule", {
			value: !0
		})
	},
	t.t = function(n, e) {
		if (1 & e && (n = t(n)),
		8 & e)
			return n;
		if (4 & e && "object" == typeof n && n && n.__esModule)
			return n;
		var r = Object.create(null);
		if (t.r(r),
		Object.defineProperty(r, "default", {
			enumerable: !0,
			value: n
		}),
		2 & e && "string" != typeof n)
			for (var o in n)
				t.d(r, o, function(e) {
					return n[e]
				}
				.bind(null, o));
		return r
	},
	t.n = function(n) {
		var e = n && n.__esModule ? function() {
			return n.default
		}
		: function() {
			return n
		};
		return t.d(e, "a", e),
		e
	},
	t.o = function(n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	},
	t.p = "",
	t(t.s = 32)
}({
	32: function(n, e, t) {
		n.exports = t(33)
	},
	33: function(n, e) {
		function t(n, e) {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value"in r && (r.writable = !0),
				Object.defineProperty(n, r.key, r)
			}
		}
		var r = function() {
			function n() {
				!function(n, e) {
					if (!(n instanceof e))
						throw new TypeError("Cannot call a class as a function")
				}(this, n)
			}
			var e, r, o;
			return e = n,
			o = [{
				key: "animationsToggle",
				value: function() {
					var n, e, t;
					$(document.body).on('click', '.js-animation-bttn', function(r) {
						e = $(r.currentTarget),
						n = e.data('animation-class'),
						s = e.data('animation-target'),
						t = e.parents('.js-animation-section'),
						$('.js-animation-object[rel="'+s+'"]', t).removeClass().addClass("js-animation-object animated " + n)
					})
				}
			}, {
				key: "init",
				value: function() {
					this.animationsToggle()
				}
			}],
			(r = null) && t(e.prototype, r),
			o && t(e, o),
			n
		}();
		jQuery(function() {
			r.init()
		})
	}
});
