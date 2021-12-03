'use strict';

//Ontology
  Blockly.JavaScript['ontology_block'] = function(block) {
  var dropdown_first_dropdown = block.getFieldValue('FIRST_DROPDOWN');
  var value_ontology = Blockly.JavaScript.valueToCode(block, 'Ontology', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_second_dropdown = block.getFieldValue('SECOND_DROPDOWN');
  var value_element = Blockly.JavaScript.valueToCode(block, 'Element', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_first_dropdown +':'+ dropdown_second_dropdown +'shape \n'+
              ' rdf:type sh:NodeShape;\n' +
              ' sh:targetClass ' + dropdown_first_dropdown+':'+dropdown_second_dropdown + ';\n'
  return code;
};

//Property
  Blockly.JavaScript['property_block'] = function(block) {
  var dropdown_first_dropdown = block.getFieldValue('FIRST_DROPDOWN');
  var dropdown_second_dropdown = block.getFieldValue('SECOND_DROPDOWN'); // TODO: Assemble JavaScript into code variable.
  var code = ' sh:property [\n' + '  sh:path ' + dropdown_first_dropdown +':' + dropdown_second_dropdown +';\n';
  return code;
};

//Constraint
Blockly.JavaScript['constraint_block'] = function(block) {
  var checkbox_value_existence = block.getFieldValue('Value Existence') == 'TRUE';
  var value_constraint = Blockly.JavaScript.valueToCode(block, 'Constraint', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (checkbox_value_existence){
    var a = 1
  }
  else{
    var a = 0
  }
  var code = '  sh:min ' + a + '; \n' + '  sh:max '+ a +';\n';
  return code;
};

Blockly.JavaScript['datatype_block'] = function(block) {
  var dropdown_data_type = block.getFieldValue('Data Type');
  var value_datatype = Blockly.JavaScript.valueToCode(block, 'datatype', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '  sh:datatype xsd:' + dropdown_data_type +';\n';
  return code;
};

//Cardinality Constraint
Blockly.JavaScript['cardinality_type'] = function(block) {
  var checkbox_input1 = block.getFieldValue('input1') == 'TRUE';
  var number_input1_1 = block.getFieldValue('input1_1');
  var checkbox_input2 = block.getFieldValue('input2') == 'TRUE';
  var number_input2_1 = block.getFieldValue('input2_1');
  var code='';
  // TODO: Assemble JavaScript into code variable.
  if (checkbox_input1){
    code= '  sh:min ' + number_input1_1 + '; \n';
  }
  if (checkbox_input2){
    code= '  sh:max ' + number_input2_1 + '; \n';
  }
  else {
    code= '  sh:min ' + number_input1_1 + '; \n' + '  sh:max '+ number_input2_1 +';\n';
  }
  return code;
};

//Datarange Constraint
Blockly.JavaScript['datarange_type'] = function(block) {
  var dropdown_input1_dropdown = block.getFieldValue('input1_dropdown');
  var dropdown_input2_dropdown = block.getFieldValue('input2_dropdown');
  var value_input1 = Blockly.JavaScript.valueToCode(block, 'input1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_input3_dropdown = block.getFieldValue('input3_dropdown');
  var value_input2 = Blockly.JavaScript.valueToCode(block, 'input2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var res1='';
  var res2='';
  if (dropdown_input2_dropdown==">") {
    res1="minExclusive"
  }
  if (dropdown_input2_dropdown==">=") {
    res1="minInclusive"
  }
  if (dropdown_input3_dropdown=="<") {
    res2="maxExclusive"
  }
  if (dropdown_input3_dropdown=="<=") {
    res2="maxInclusive"
  }
  var code = '  sh:datatype xsd:' + dropdown_input1_dropdown +';\n' + 
             '  sh: ' + res1 +';\n' + 
             '  sh: ' + res2 +';\n';
  return code;
};

//Error Message
Blockly.JavaScript['message_type'] = function(block) {
  var text_enter_error_message = block.getFieldValue('Enter error message');
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '  sh:message "'+ text_enter_error_message +'" ;\n].';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//SPARQL Block
  Blockly.JavaScript['sparql_type'] = function(block) {
  var text_input1 = block.getFieldValue('input1');
  var value_error_msg = Blockly.JavaScript.valueToCode(block, 'error_msg', Blockly.JavaScript.ORDER_ATOMIC);
  var text_input2 = block.getFieldValue('input2');
  var value_sparql_exp = Blockly.JavaScript.valueToCode(block, 'sparql_exp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  // TODO: Assemble JavaScript into code variable.
  var code = ' sh:sparql [ \n' +
             '  rdf:type sh:SPARQLConstraint ;\n' +
             '  sh:message '+ text_input1 +'\n' +
             '  sh:select """ \n'+
             '    '+text_input2+'""";\n'+
             '].\n';
  return code;
};

//SPARQL basic block
Blockly.JavaScript['sparqlbasic_type'] = function(block) {
  var text_input1 = block.getFieldValue('input1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sparqlquery_type'] = function(block) {
  var text_input1 = block.getFieldValue('input1');
  var dropdown_input_dropdown1 = block.getFieldValue('input_dropdown1');
  var dropdown_input_dropdown1_1 = block.getFieldValue('input_dropdown1_1');
  var text_input2 = block.getFieldValue('input2');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sparqlquery2_type'] = function(block) {
  var text_input1 = block.getFieldValue('input1');
  var dropdown_input_dropdown1 = block.getFieldValue('input_dropdown1');
  var dropdown_input_dropdown1_1 = block.getFieldValue('input_dropdown1_1');
  var dropdown_input_dropdown2 = block.getFieldValue('input_dropdown2');
  var dropdown_input_dropdown2_1 = block.getFieldValue('input_dropdown2_1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['sparqlfilter_type'] = function(block) {
  var dropdown_input_dropdown1 = block.getFieldValue('input_dropdown1');
  var dropdown_input_dropdown2 = block.getFieldValue('input_dropdown2');
  var text_input1 = block.getFieldValue('input1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};