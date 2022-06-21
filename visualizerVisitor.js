import matlabVisitor from "./matlabVisitor.js";

export default class visualizerVisitor extends matlabVisitor{

    constructor(){
        super();
        this.simbTable = {};
    }

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

    /*visitExpression(ctx) {
        return this.visitChildren(ctx);
    }*/

    /*visitArray_expression(ctx) {
        if(ctx.IDENTIFIER().getText() == '@'){
            console.log(ctx.IDENTIFIER().getText()+'('+ctx.primary_expression().IDENTIFIER().getText()+')');
        }
        return this.visitChildren(ctx);
    }*/

    /*visitAssignment_expression(ctx) {
        if(ctx.postfix_expression() != null && ctx.expression() != null){
            //Si es la declaracion de una variable
            if(ctx.postfix_expression().primary_expression() != null){
                if(ctx.postfix_expression().primary_expression().IDENTIFIER() != null && ctx.expression().or_expression().and_expression().equality_expression().relational_expression().additive_expression().multiplicative_expression().unary_expression().postfix_expression().primary_expression() != null){
                    var name = ctx.postfix_expression().primary_expression().IDENTIFIER().getText();
                    var value = this.visitExpression(ctx.expression());
                    //console.log('assignment expression: '+value.toString());
                    if(value == 'true'){
                        this.simbTable[name] = true;
                    }else if(value == 'false'){
                        this.simbTable[name] = false;
                    }else{
                        this.simbTable[name] = parseFloat(value);
                    }
                    console.log(name+'='+value);
                }
            }
        }
        //return this.visitChildren(ctx);
    }*/

    visitIteration_statement(ctx){
        if(ctx.WHILE() != null){
            while(this.visitExpression(ctx.expression()) == true){
                this.visitStatement_list(ctx.statement_list());
            }
        }
    }

    visitSelection_statement(ctx){
        if(ctx.IF() != null && ctx.ELSE() != null && ctx.elseif_clause() == null){
            if(this.visitExpression(ctx.expression()) == true){
                this.visitStatement_list(ctx.statement_list(0));
            }else{
                this.visitStatement_list(ctx.statement_list(1));
            }
        }
    }

    visitAssignment_expression(ctx){
        if(ctx.postfix_expression() != null && ctx.expression() != null){
            //console.log(ctx.postfix_expression().primary_expression().IDENTIFIER().getText());
            //console.log(this.visitExpression(ctx.expression()));
            this.simbTable[ctx.postfix_expression().primary_expression().IDENTIFIER().getText()] = this.visitExpression(ctx.expression());
        }
    }

    visitExpression(ctx){
        if(ctx.expression() == null){
            return this.visitOr_expression(ctx.or_expression());
        }
    }

    visitOr_expression(ctx){
        if(ctx.or_expression() == null){
            return this.visitAnd_expression(ctx.and_expression());
        }else{
            if(ctx.OR_OP() != null){
                return this.visitOr_expression(ctx.or_expression()) || this.visitAnd_expression(ctx.and_expression());
            }
        }
    }

    visitAnd_expression(ctx){
        if(ctx.and_expression() == null){
            return this.visitEquality_expression(ctx.equality_expression());
        }else{
            if(ctx.AND_OP() != null){
                return this.visitAnd_expression(ctx.and_expression()) && this.visitEquality_expression(ctx.equality_expression());
            }
        }
    }

    visitEquality_expression(ctx){
        if(ctx.equality_expression() == null){
            return this.visitRelational_expression(ctx.relational_expression());
        }else{
            if(ctx.EQ_OP() != null){
                return this.visitEquality_expression(ctx.equality_expression()) == this.visitRelational_expression(ctx.relational_expression());
            }else if(ctx.NE_OP() != null){
                return this.visitEquality_expression(ctx.equality_expression()) != this.visitRelational_expression(ctx.relational_expression());
            }
        }
    }

    visitRelational_expression(ctx){
        if(ctx.relational_expression() == null){
            return this.visitAdditive_expression(ctx.additive_expression());
        }else{
            if(ctx.L_OP() != null){
                return this.visitRelational_expression(ctx.relational_expression()) < this.visitAdditive_expression(ctx.additive_expression());
            }else if(ctx.G_OP() != null){
                return this.visitRelational_expression(ctx.relational_expression()) > this.visitAdditive_expression(ctx.additive_expression());
            }else if(ctx.LE_OP() != null){
                return this.visitRelational_expression(ctx.relational_expression()) <= this.visitAdditive_expression(ctx.additive_expression());
            }else if(ctx.GE_OP() != null){
                return this.visitRelational_expression(ctx.relational_expression()) >= this.visitAdditive_expression(ctx.additive_expression());
            }
        }
    }

    visitAdditive_expression(ctx){
        if(ctx.additive_expression() == null){
            return this.visitMultiplicative_expression(ctx.multiplicative_expression());
        }else{
            if(ctx.ADD_OP() != null){
                return this.visitAdditive_expression(ctx.additive_expression()) + this.visitMultiplicative_expression(ctx.multiplicative_expression());
            }else if(ctx.SUB_OP() != null){
                return this.visitAdditive_expression(ctx.additive_expression()) - this.visitMultiplicative_expression(ctx.multiplicative_expression());
            }
        }
    }

    visitMultiplicative_expression(ctx){
        if(ctx.multiplicative_expression() == null){
            return this.visitUnary_expression(ctx.unary_expression());
        }else{
            if(ctx.MUL_OP() != null){
                //console.log(this.visitMultiplicative_expression(ctx.multiplicative_expression()) * this.visitUnary_expression(ctx.unary_expression()));
                return this.visitMultiplicative_expression(ctx.multiplicative_expression()) * this.visitUnary_expression(ctx.unary_expression());
            }else if(ctx.DIV_OP() != null){
                //console.log(this.visitMultiplicative_expression(ctx.multiplicative_expression()) / this.visitUnary_expression(ctx.unary_expression()));
                return this.visitMultiplicative_expression(ctx.multiplicative_expression()) / this.visitUnary_expression(ctx.unary_expression());
            }else if(ctx.POW_OP() != null){
                //console.log(this.visitMultiplicative_expression(ctx.multiplicative_expression()) ** this.visitUnary_expression(ctx.unary_expression()));
                return this.visitMultiplicative_expression(ctx.multiplicative_expression()) ** this.visitUnary_expression(ctx.unary_expression());
            }
        }
    }

    visitUnary_expression(ctx){
        if(ctx.unary_operator() == null){
            return this.visitPostfix_expression(ctx.postfix_expression());
        }else{
            if(ctx.unary_operator().ADD_OP() != null){
                //console.log('visit unary expression: '+this.visitPostfix_expression(ctx.postfix_expression()));
                return this.visitPostfix_expression(ctx.postfix_expression());
            }else if(ctx.unary_operator().SUB_OP() != null){
                //console.log('visit unary expression: '+this.visitPostfix_expression(ctx.postfix_expression()));
                return -1.0*this.visitPostfix_expression(ctx.postfix_expression());
            }else if(ctx.unary_operator().NEG_OP() != null){
                //console.log('visit unary expression: '+this.visitPostfix_expression(ctx.postfix_expression()));
                return !(this.visitPostfix_expression(ctx.postfix_expression()));
            }
        }
    }

    visitPostfix_expression(ctx){
        if(ctx.primary_expression() != null){
            //console.log("visit_postfix_exp: "+this.visitPrimary_expression(ctx.primary_expression()));
            return this.visitPrimary_expression(ctx.primary_expression());
        }else if(ctx.array_expression() != null){
            return this.visitArray_expression(ctx.array_expression());
        }
    }

    visitArray_expression(ctx){
        if(ctx.IDENTIFIER().getText() == '@' && ctx.expression() != null){
            //console.log(Function(ctx.primary_expression().getText(),"return "+ctx.expression().getText()+" ;")(2.0));
            return Function(ctx.primary_expression().getText(),"return "+ctx.expression().getText()+" ;");
        }else if(ctx.expression() == null){
            console.log(ctx.IDENTIFIER().getText());
            console.log(ctx.primary_expression().getText());
        }
    }

    visitPrimary_expression(ctx) {
        if(ctx.IDENTIFIER() != null){
            //console.log('primary_expression: '+ctx.IDENTIFIER().getText());
            if(ctx.IDENTIFIER().getText() == 'true'){
                return ctx.IDENTIFIER().getText() === 'true';
            }else if(ctx.IDENTIFIER().getText() == 'false'){
                return !(ctx.IDENTIFIER().getText() === 'false');
            }
            if(this.simbTable[ctx.IDENTIFIER().getText()] != null){
                //console.log(this.simbTable[ctx.IDENTIFIER().getText()]);
                //console.log(parseFloat(this.simbTable[ctx.IDENTIFIER().getText()]));
                if(this.simbTable[ctx.IDENTIFIER().getText()].toString() == 'true'){
                    return this.simbTable[ctx.IDENTIFIER().getText()].toString() === 'true';
                }else if(this.simbTable[ctx.IDENTIFIER().getText()].toString() == 'false'){
                    return !(this.simbTable[ctx.IDENTIFIER().getText()].toString() === 'false');
                }else{
                    return parseFloat(this.simbTable[ctx.IDENTIFIER().getText()]);
                }
            }else{
                console.log("Error semantico, la variable con nombre: \"" + ctx.IDENTIFIER().getText() + "\" no ha sido declarada.\n");
            }
        }else if(ctx.CONSTANT() != null){
            return parseFloat(ctx.CONSTANT().getText());
        }else if(ctx.expression() != null){
            return this.visitExpression(ctx.expression());
        }
        //return this.visitChildren(ctx);
    }
}