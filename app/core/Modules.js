var Modules = (function () {

    Object.defineProperty(Object.prototype, "inherit", {
        value: function (parent) {
            this.prototype = Object.create(parent.prototype);
            this.prototype.constructor = this;
        }
    });

    var ModuleAbstract = (function() {

        function ModuleAbstract() { }

        ModuleAbstract.prototype.getName = function() {
            return this.constructor.name.toLowerCase();
        }

        ModuleAbstract.prototype.getPattern = function() {
            return this._pattern;
        }

        return ModuleAbstract;
    }());

    var Question = (function () {
        function Question() { ModuleAbstract.call(this, []); }
        Question.inherit(ModuleAbstract);
        Question.prototype._pattern = "/question/:id";

        return Question;
    }());

    var Category = (function () {
        function Category() { ModuleAbstract.call(this, []); }
        Category.inherit(ModuleAbstract);
        Category.prototype._pattern = "/category/all";

        return Category;
    }());

    return {
        ModuleAbstract: ModuleAbstract,
        Question: Question,
        Category: Category
    }

}());
