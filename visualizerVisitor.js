import matlabVisitor from "./matlabVisitor.js";

export default class visualizerVisitor extends matlabVisitor{
    /*visitTranslation_unit(ctx) {
        return this.visitChildren(ctx);
    }

    visitStatement_list(ctx) {
        return this.visitChildren(ctx);
    }

    visitStatement(ctx) {
        return this.visitChildren(ctx);
    }

	visitAssignment_statement(ctx) {
        return this.visitChildren(ctx);
    }*/

    /*visitAssignment_expression(ctx) {
        return this.visitChildren(ctx);
    }*/

    /*visitPostfix_expression(ctx) {
        return this.visitChildren(ctx);
    }*/

    /*visitExpression(ctx) {
        return this.visitChildren(ctx);
    }*/

    visitPrimary_expression(ctx) {
        if(ctx.IDENTIFIER() != null){
            console.log(ctx.IDENTIFIER().getText());
        }else if(ctx.CONSTANT() != null){
            console.log(ctx.CONSTANT().getText());
        }
        return this.visitChildren(ctx);
    }
}