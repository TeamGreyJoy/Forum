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

        ModuleAbstract.prototype.render = function(url, type) {
            if (type == 'GET') {
                Ajax.appendGet(url, this);
            } else {
                Ajax.appendPost(url, this);
            }
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

    var Answers = (function () {
        function Answers() { ModuleAbstract.call(this, []); }
        Answers.inherit(ModuleAbstract);
        Answers.prototype._pattern = "/question/:id";

        return Answers;
    }());

    return {
        ModuleAbstract: ModuleAbstract,
        Question: Question,
        Category: Category,
        Answers: Answers
    }

}());
