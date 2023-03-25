import {
  AsExpression,
  Diagnostics,
  factory,
  findAncestor,
  getTokenAtPosition,
  isAsExpression,
  isInJSFile,
  isTypeAssertionExpression,
  SourceFile,
  SyntaxKind,
  textChanges,
  TypeAssertion,
} from '../_namespaces/ts';
import {
  codeFixAll,
  createCodeFixAction,
  registerCodeFix,
} from '../_namespaces/ts.codefix';

const fixId = 'addConvertToUnknownForNonOverlappingTypes';
const errorCodes = [
  Diagnostics
    .Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the_other_If_this_was_intentional_convert_the_expression_to_unknown_first
    .code,
];
unction makeChange(changeTracker: textChanges.ChangeTracker, sourceFile: SourceFile, assertion: AsExpression | TypeAssertion) {
    const replacement = isAsExpression(assertion)
        ? factory.createAsExpression(assertion.expression, factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword))
        : factory.createTypeAssertion(factory.createKeywordTypeNode(SyntaxKind.UnknownKeyword), assertion.expression);
    changeTracker.replaceNode(sourceFile, assertion.expression, replacement);
}

function getAssertion(sourceFile: SourceFile, pos: number): AsExpression | TypeAssertion | undefined {
    if (isInJSFile(sourceFile)) return undefined;
    return findAncestor(getTokenAtPosition(sourceFile, pos), (n): n is AsExpression | TypeAssertion => isAsExpression(n) || isTypeAssertionExpression(n));
}
