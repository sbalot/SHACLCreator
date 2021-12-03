'use strict';

//Ontology block

Blockly.Blocks['ontology_block'] = {
  init: function() {
    this.currentValue = 'BOT';
    this.appendDummyInput()
        .appendField("Ontology")
        .appendField(new Blockly.FieldDropdown([
          ["bot","BOT"], 
          ["beo","BEO"], 
          ["schema","SCHEMA"]], this.validate.bind(this)), "FIRST_DROPDOWN");
    this.appendDummyInput()
        .appendField("Element")
        .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), 'SECOND_DROPDOWN')
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    // this now refers to the block when it's called on the field dropdown because this was bound in init to the block 
    const otherVal = this.currentValue;
    if (otherVal === 'BOT') {
      return [
        ["Zone", "Zone"], 
        ["Site", "Site"], 
        ["Building", "Building"],
        ["Storey", "Storey"],
        ["Space", "Space"],
        ["hasBuilding", "hasBuilding"],
        ["hasStory", "hasStory"],
        ["containsZone", "containsZone"],
        ["hasSpace", "hasSpace"],
        ["adjacentZone", "BUILDING"],
        ["intersectsZone", "intersectsZone"],
        ["hasElement", "hasElement"],
        ["hasSubElement", "hasSubElement"],
        ["hasSpace", "hasSpace"],
        ["hasStory", "hasStory"],
        ["hasZeroPoint", "hasZeroPoint"],
        ["adjacentElement", "adjacentElement"],
      ];
    } 
    if (otherVal=='BEO') {
      return [
        ["Anchor Bolt", "ANCHORBOLT"], 
        ["Anchor Plate", "ANCHORPLATE"], 
        ["Anchoring", "ANCHORING"],
        ["Awning", "AWNING"],
        ["Balustrade", "BALUSTRADE"],
        ["Bar", "BAR"],
        ["Barrel Roof", "BARRELROOF"],
        ["Beam", "BEAM"],
        ["Beam", "BEAM"],
        ["Bolt", "BOLT"],
        ["Bored Pile", "BOREDPILE"],
        ["Brace", "BRACE"],
        ["Bracket", "BRACKET"],
        ["Building Element", "BUILDINGELEMENT"],
        ["Building Element Part", "BUILDINGELEMENTPART"],
        ["Butterfly Roof", "BUTTERFLYROOF"],
        ["Caisson Foundation", "CAISSONFOUNDATION"],
        ["Ceiling", "CEILING"],
        ["Chord", "CHORD"],
        ["Chimney", "CHIMNEY"],
        ["Cladding", "CLADDING"],
        ["Coated", "COATED"],
        ["Cohesion Pile", "COHESIONPILE"],
        ["Collar", "COLLAR"],
        ["Column", "COLUMN"],
        ["Column", "COLUMN"],
        ["Coupler", "COUPLER"],
        ["Covering", "COVERING"],
        ["Craneway", "CRANEWAY"],
        ["Curtain Panel", "CURTAINPANEL"],
        ["Curtain Wall", "CURTAINWALL"],
        ["Curved", "CURVED"],
        ["Curved Run Stair", "CURVEDRUNSTAIR"],
        ["Discrete Accessory", "DISCRETEACCESSORY"],
        ["Dome Roof", "DOMEROOF"],
        ["Door", "DOOR"],
        ["Door", "DOOR"],
        ["Double Return Stair", "DOUBLERETURNSTAIR"],
        ["dowel", "DOWEL"],
        ["Driven Pile", "DRIVENPILE"],
        ["Edge", "EDGE"],
        ["Element Component", "ELEMENTCOMPONENT"],
        ["Elemented Wall", "ELEMENTEDWALL"],
        ["Elemented Wall Case", "ELEMENTEDWALLCASE"],
        ["Elevator", "ELEVATOR"],
        ["Fahrtreppe", "FAHRTREPPE"],
        ["Fastner", "FASTNER"],
        ["Fenster", "FENSTER"],
        ["Fixed End", "FIXEDEND"],
        ["Flat Roof", "FLATROOF"],
        ["Floor", "FLOOR"],
        ["Flooring", "FLOORING"],
        ["Footing", "FENSTER"],
        ["Footing Beam", "FOOTINGBEAM"],
        ["Free From Roof", "FREEFORMROOF"],
        ["Friction Pile", "FRICTIONPILE"],
        ["friform", "FRIFORM"],
        ["Gable Roof", "GABLEROOF"],
        ["Gambrel Roof", "GAMBRELROOF"],
        ["Gate", "GATE"],
        ["Glue", "GLUE"],
        ["Guardrail", "GUARDRAIL"],
        ["Half Turn Ramp", "HALFTURNRAMP"],
        ["Half Turn Stair", "HALFTURNSTAIR"],
        ["Half Winding Stair", "HALFWINDINGSTAIR"],
        ["Handrail", "HANDRAIL"],
        ["Hip Roof", "HIPROOF"],
        ["Hipped Gable Roof", "HIPPEDGABLEROOF"],
        ["Insulation", "INSULATION"],
        ["Insulation", "INSULATION"],
        ["Jalousie", "JALOUSIE"],
        ["Jet Grouting Pile", "JETGROUTINGPILE"],
        ["Joiste", "JOISTE"],
        ["Kompresjon", "KOMPRESJON"],
        ["Landing", "LANDING"],
        ["Lifting Gear", "LIFTINGGEAR"],
        ["Ligature", "LIGATURE"],
        ["Light Dome", "LIGHTDOME"],
        ["Lintel", "LINTEl"],
        ["Main", "MAIN"],
        ["Mansard Roof", "MANSARDROOF"],
        ["Mechanical Fastener", "MECHANICALFASTENER"],
        ["Member", "MEMBER"],
        ["Membrane", "MEMBRANE"],
        ["Molding", "MOLDING"],
        ["Mortar", "MORTAR"],
        ["Movable Wall", "MOVABLEWALL"],
        ["Moving Walkway", "MOVINGWALKWAY"],
        ["Mullion", "MULLION"],
        ["Nail", "NAIL"],
        ["Nail Plate", "NAILPLATE"],
        ["Pad Footing", "PADFOOTING"],
        ["Parapet Wall", "PARAPETWALL"],
        ["Partitioning Wall", "PARTITIONINGWALL"],
        ["Pavilion Roof", "PAVILIONROOF"],
        ["Pilaster", "PILASTER"],
        ["Pile", "PILE"],
        ["Pile Cap", "PILECAP"],
        ["Plate", "PLATE"],
        ["Plate", "PLATE"],
        ["Plumbing Wall", "PLUMBINGWALL"],
        ["Polygonal Wall", "POLYGONALWALL"],
        ["Pre-cast Hollow Core Slab", "Beam-HOLLOWCORE"],
        ["Precast Panel", "PRECASTPANEL"],
        ["Punching", "PUNCHING"],
        ["Quarter Turn Ramp", "QUARTERTURNRAMP"],
        ["Quarter Turn Stair", "QUARTERTURNSTAIR"],
        ["Quarter Winding Stair", "QUARTERWINDINGSTAIR"],
        ["Rafter", "RAFTER"],
        ["Railing", "RAILING"],
        ["Rainbow Roof", "RAINBOWROOF"],
        ["Ramp", "RAMP"],
        ["Ramp Flight", "RAMPFLIGHT"],
        ["Reinforcing Bar", "REINFORCINGBAR"],
        ["Reinforcing Element", "REINFORCINGELEMENT"],
        ["Reinforcing Mesh", "REINFORCINGMESH"],
        ["Ring", "RING"],
        ["Rivet", "RIVET"],
        ["Roof", "ROOF"],
        ["Roof", "ROOF"],
        ["Roof Hatch", "ROOFHATCH"],
        ["Roofing", "ROOFING"],
        ["Screw", "SCREW"],
        ["Shading Device", "SHADINGDEVICE"],
        ["Shear", "SHEAR"],
        ["Shear Connector", "SHEARCONNECTOR"],
        ["Shear Wall", "SHEARWALL"],
        ["Shed Roof", "SHEDROOF"],
        ["Sheet", "SHEET"],
        ["Shutter", "SHUTTER"],
        ["Skirting Board", "SKIRTINGBOARD"],
        ["Skylight", "SKYLIGHT"],
        ["Slab", "SLAB"],
        ["Sleeving", "SLEEVING"],
        ["Solid Wall", "SOLIDWALL"],
        ["Spandrel", "SPANDREL"],
        ["Spiral", "SPIRAL"],
        ["Spiral", "SPIRAL"],
        ["Spiral Ramp", "SPIRALRAMP"],
        ["Spiral Stair", "SPIRALSTAIR"],
        ["Spring", "SPRING"],
        ["Stair", "STAIR"],
        ["Stair Flight", "STAIRFLIGHT"],
        ["Standard Wall", "STANDARDWALL"],
        ["Staple", "STAPLE"],
        ["Stople", "STOPLE"],
        ["Straight", "STRAIGHT"],
        ["Straignt", "STRAIGHT"],
        ["Straight Run Ramp", "STRAIGHTRUNRAMP"],
        ["Strand", "STRAND"],
        ["Stringer", "STRINGER"],
        ["Strip Footing", "STRIPFOOTING"],
        ["Strut", "STRUT"],
        ["Stud", "STUD"],
        ["Stud", "STUD"],
        ["Stud Shear Connector", "STUDSHEARCONNECTOR"],
        ["Stop Fundament", "STOPFUNDAMENT"],
        ["Support", "SUPPORT"],
        ["Soylesko", "SOYLESKO"],
        ["T_Beam", "T_BEAM"],
        ["Takas", "TAKAS"],
        ["Tendon", "TENDON"],
        ["Tendon Anchor", "TENDONANCHOR"],
        ["Tensioning End", "TENSIONINGEND"],
        ["Three Quarter Turn Stair", "THREEQUARTERTURNSTAIR"],
        ["Three Quarter Winding Stair", "THREEQUARTERWINDINGSTAIR"],
        ["Transport Element", "TRANSPORTELEMENT"],
        ["Two Curved Run Stair", "TWOCURVEDRUNSTAIR"],
        ["Two Quarter Turn Ramp", "TWOQUARTERTURNRAMP"],
        ["Two Quarter Turn Stair", "TWOQUARTERTURNSTAIR"],
        ["Two Straight Run Ramp", "TWOSTRAIGHTRUNRAMP"],
        ["Vibration Isolator", "VIBRATIONISOLATOR"],
        ["Wall", "WALL"],
        ["Weld", "WELD"],
        ["Winder", "WINDER"],
        ["Window", "WINDOW"],
        ["Wire", "WIRE"],
        ["Wrapping", "WRAPPING"]
      ];
    }
    if (otherVal=='SCHEMA') {
      return [["Table", "TABLE"], ["Something else", "SOMETHING ELSE"], ["bar", "BAR"]];
    }
  },

  validate: function(newValue) {
    this.currentValue = newValue;
    var secondDropdown = this.getField('SECOND_DROPDOWN');
    var opts = secondDropdown.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown.setValue(opts[0][1]);
  }
};


//Property block
Blockly.Blocks['property_block'] = {
  init: function() {
    this.currentValue = 'PROPS';
    this.appendDummyInput()
        .appendField("Data Property:");
    this.appendDummyInput()
        .appendField("Select Property Ontology")
    .appendField(new Blockly.FieldDropdown([
      ["PROPS","PROPS"], 
      ["SEAS","SEAS"], 
      ["SCHEMA","SCHEMA"]], this.validate.bind(this)), "FIRST_DROPDOWN");
    this.appendDummyInput()
        .appendField("Select Property")
        .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), 'SECOND_DROPDOWN')
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Select the ontology of the property and also the name of the property to be checked");
 this.setHelpUrl("");
  },
  generateOptions: function() {
    // this now refers to the block when it's called on the field dropdown because this was bound in init to the block 
    const otherVal = this.currentValue;
    if (otherVal === 'PROPS') {
      return [
        ["Attributes Group", "AttributesGroup"],
        ["batid attribute", "batid_attribute"], 
        ["category", "category"],
        ["extend To Structure", "extendToStructure"],
        ["fire Rating", "fireRating"],
        ["global Id Ifc Root_attribute", "globalIdIfcRoot_attribute"],
        ["is External", "isExternal"],
        ["load Bearing", "loadBearing"],
        ["longName Ifc Spatial Structure Element_attribute", "longNameIfcSpatialStructureElement_attribute"],
        ["name IfcRoot_attribute", "nameIfcRoot_attribute"],
        ["object Type Ifc Object_attribute", "objectTypeIfcObject_attribute"],
        ["overall Height Ifc Door_attribute", "overallHeightIfcDoor_attribute"],
        ["overall Width Ifc Door_attribute", "overallWidthIfcDoor_attribute"],
        ["overall Height Ifc Window_attribute", "overallHeightIfcWindow_attribute"],
        ["overall Width Ifc Window_attribute", "overallWidthIfcWindow_attribute"],
        ["part Of Attributes Group", "partOfAttributesGroup"],
        ["part Of Pset", "partOfPset"],
        ["pitch Angle", "pitchAngle"],
        ["Pset", "Pset"],
        ["reference", "reference"],
        ["rise rHeight", "riserHeight"],
        ["slope", "slope"],
        ["span", "span"],
        ["Thermal Transmittance","thermalTransmittance"],
        ["total Thickness", "totalThickness"],
        ["tread Length", "treadLength"],
      ];
    } 
    if (otherVal=='SEAS') {
      return [
        ["evaluation", "evaluation"]
      ];
    }
    if (otherVal=='SCHEMA') {
      return [["value", "value"], 
    ];
    }
  },

  validate: function(newValue) {
    this.currentValue = newValue;
    var secondDropdown = this.getField('SECOND_DROPDOWN');
    var opts = secondDropdown.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown.setValue(opts[0][1]);
  }
};

//Constraints Block 1
Blockly.Blocks['constraint_block'] = {
  init: function() {
    this.appendValueInput("Constraint")
        .setCheck(null)
        .appendField("Value Existence")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Value Existence");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Check if this value exists");
 this.setHelpUrl("");
  }
};

//Constraints Block 2
    Blockly.Blocks['constraint_value_range_block'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Range Constraint:");
        this.appendValueInput("minvaluet")
            .setCheck(null)
            .appendField("Input Minimum value")
            .appendField(new Blockly.FieldNumber(0), "minva")
            .appendField("and ");
        this.appendValueInput("maxvalt")
            .setCheck(null)
            .appendField("Input Maximum value")
            .appendField(new Blockly.FieldNumber(0), "maxva");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Checks if a property value exists within a range");
 this.setHelpUrl("");
  }
};

//Constraints Block 3
Blockly.Blocks['datatype_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Constraint :");
    this.appendValueInput("datatype")
        .setCheck(null)
        .appendField("Type of Data")
        .appendField(new Blockly.FieldDropdown([["String","string"], ["Integer","integer"], ["Float","float"], ["Boolean","boolean"], ["Date","date"], ["Date and Time","dateTime"], ["Decimal","decimal"], ["Duration","duration"], ["Time","time"]]), "Data Type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Check the type of data for the selected property");
 this.setHelpUrl("https://www.w3.org/TR/shacl/#DatatypeConstraintComponent");
  }
};

//Cardinality Constraint
Blockly.Blocks['cardinality_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cardinality Constraint:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "input1")
        .appendField("min")
        .appendField(new Blockly.FieldNumber(0), "input1_1");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "input2")
        .appendField("max")
        .appendField(new Blockly.FieldNumber(0), "input2_1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Datarange Constraint
Blockly.Blocks['datarange_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Range Constraint:");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Data Type")
        .appendField(new Blockly.FieldDropdown([["Integer","xsd:integer"], ["Float","xsd:float"], 
        ["Decimal","xsd:decimal"],
        ["Double","xsd:double"],
        ]), "input1_dropdown");
    this.appendValueInput("input1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([[">",">"], [">=",">="]]), "input2_dropdown");
    this.appendValueInput("input2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("")
        .appendField(new Blockly.FieldDropdown([["<","<"], ["<=","<="]]), "input3_dropdown");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//Message block
Blockly.Blocks['message_type'] = {
    init: function() {
        this.appendValueInput("message")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Message")
            .appendField(new Blockly.FieldTextInput("Enter error message"), "Enter error message");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(130);
        this.setTooltip("Enter the error message to be displayed to the user when this violation occurs during checking");
        this.setHelpUrl("https://www.w3.org/TR/shacl/#message");
    }
};

//SPARQL Block
Blockly.Blocks['sparql_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SPARQL Constraint:");
    this.appendValueInput("error_msg")
        .setCheck(null)
        .appendField("Enter error Message:")
        .appendField(new Blockly.FieldTextInput("This condition was violated during validaiton"), "input1");
    this.appendValueInput("sparql_exp")
        .setCheck(null)
        .appendField("SPARQL Expression")
        .appendField(new Blockly.FieldTextInput("Enter the sparql query here"), "input2");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//SPARQL basic block
Blockly.Blocks['sparqlbasic_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SPARQL Basic Shape");
    this.appendDummyInput()
        .appendField("Enter Error Message")
        .appendField(new Blockly.FieldTextInput("click me"), "input1");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sparqlquery_type'] = {
  init: function() {
    this.currentValue = 'PROPS';
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("$this"), "input1")
        .appendField(new Blockly.FieldDropdown([
        ["PROPS","PROPS"], 
        ["RDF","RDF"], 
        ["SEAS","SEAS"], 
        ["SCHEMA","SCHEMA"], 
        ["OPM","OPM"]], this.validate.bind(this)), "input_dropdown1")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), "input_dropdown1_1")
        .appendField(new Blockly.FieldTextInput("?obj1"), "input2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  generateOptions: function() {
    // this now refers to the block when it's called on the field dropdown because this was bound in init to the block 
    const otherVal = this.currentValue;
  if (otherVal === 'PROPS') {
      return [
        ["Attributes Group", "AttributesGroup"],
        ["batid attribute", "batid_attribute"], 
        ["category", "category"],
        ["extend To Structure", "extendToStructure"],
        ["fire Rating", "fireRating"],
        ["global Id Ifc Root_attribute", "globalIdIfcRoot_attribute"],
        ["is External", "isExternal"],
        ["load Bearing", "loadBearing"],
        ["longName Ifc Spatial Structure Element_attribute", "longNameIfcSpatialStructureElement_attribute"],
        ["name IfcRoot_attribute", "nameIfcRoot_attribute"],
        ["object Type Ifc Object_attribute", "objectTypeIfcObject_attribute"],
        ["overall Height Ifc Door_attribute", "overallHeightIfcDoor_attribute"],
        ["overall Width Ifc Door_attribute", "overallWidthIfcDoor_attribute"],
        ["overall Height Ifc Window_attribute", "overallHeightIfcWindow_attribute"],
        ["overall Width Ifc Window_attribute", "overallWidthIfcWindow_attribute"],
        ["part Of Attributes Group", "partOfAttributesGroup"],
        ["part Of Pset", "partOfPset"],
        ["pitch Angle", "pitchAngle"],
        ["Pset", "Pset"],
        ["reference", "reference"],
        ["rise rHeight", "riserHeight"],
        ["slope", "slope"],
        ["span", "span"],
        ["Thermal Transmittance","thermalTransmittance"],
        ["total Thickness", "totalThickness"],
        ["tread Length", "treadLength"],
      ];
    } 
    if (otherVal=='SEAS') {
      return [
        ["evaluation", "evaluation"]
      ];
    }
    if (otherVal=='SCHEMA') {
      return [["value", "value"], 
    ];
    }
    if (otherVal=='RDF') {
      return [["type", "type"], 
    ];
    }
    if (otherVal=='OPM') {
      return [["Property", "Property"], ["Current Property State", "CurrentPropertyState"]
    ];
    }
  },

  validate: function(newValue) {
    this.currentValue = newValue;
    var secondDropdown = this.getField('input_dropdown1_1');
    var opts = secondDropdown.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown.setValue(opts[0][1]);
  }

};

Blockly.Blocks['sparqlquery2_type'] = {
  init: function() {
    this.currentValue = 'PROPS';
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("default"), "input1")
        .appendField(new Blockly.FieldDropdown([
          ["PROPS","PROPS"], 
          ["RDF","RDF"], 
          ["SEAS","SEAS"], 
          ["SCHEMA","SCHEMA"], 
          ["OPM","OPM"]], this.validate.bind(this)), "input_dropdown1")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), "input_dropdown1_1")
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
      ["PROPS","PROPS"], 
      ["RDF","RDF"], 
      ["SEAS","SEAS"], 
      ["SCHEMA","SCHEMA"], 
      ["OPM","OPM"]], this.validate.bind(this)), "input_dropdown2")
      .appendField(":")
      .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), "input_dropdown2_1");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  generateOptions: function() {
    // this now refers to the block when it's called on the field dropdown because this was bound in init to the block 
    const otherVal = this.currentValue;
    if (otherVal === 'PROPS') {
      return [
        ["Attributes Group", "AttributesGroup"],
        ["batid attribute", "batid_attribute"], 
        ["category", "category"],
        ["extend To Structure", "extendToStructure"],
        ["fire Rating", "fireRating"],
        ["global Id Ifc Root_attribute", "globalIdIfcRoot_attribute"],
        ["is External", "isExternal"],
        ["load Bearing", "loadBearing"],
        ["longName Ifc Spatial Structure Element_attribute", "longNameIfcSpatialStructureElement_attribute"],
        ["name IfcRoot_attribute", "nameIfcRoot_attribute"],
        ["object Type Ifc Object_attribute", "objectTypeIfcObject_attribute"],
        ["overall Height Ifc Door_attribute", "overallHeightIfcDoor_attribute"],
        ["overall Width Ifc Door_attribute", "overallWidthIfcDoor_attribute"],
        ["overall Height Ifc Window_attribute", "overallHeightIfcWindow_attribute"],
        ["overall Width Ifc Window_attribute", "overallWidthIfcWindow_attribute"],
        ["part Of Attributes Group", "partOfAttributesGroup"],
        ["part Of Pset", "partOfPset"],
        ["pitch Angle", "pitchAngle"],
        ["Pset", "Pset"],
        ["reference", "reference"],
        ["rise rHeight", "riserHeight"],
        ["slope", "slope"],
        ["span", "span"],
        ["Thermal Transmittance","thermalTransmittance"],
        ["total Thickness", "totalThickness"],
        ["tread Length", "treadLength"],
      ];
    } 
    if (otherVal=='SEAS') {
      return [
        ["evaluation", "evaluation"]
      ];
    }
    if (otherVal=='SCHEMA') {
      return [["value", "value"], 
    ];
    }
    if (otherVal=='RDF') {
      return [["type", "type"], 
    ];
    }
    if (otherVal=='OPM') {
      return [["Property", "Property"], ["Current Property State", "CurrentPropertyState"]
    ];
    }
  },

  validate: function(newValue) {
    this.currentValue = newValue;
    var secondDropdown = this.getField('input_dropdown1_1');
    var opts = secondDropdown.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown.setValue(opts[0][1]);
    var secondDropdown2 = this.getField('input_dropdown2_1');
    var opts = secondDropdown2.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown2.setValue(opts[0][1]);
  }
};

Blockly.Blocks['sparqlfilter_type'] = {
  init: function() {
    this.currentValue = 'PROPS';
    this.appendDummyInput()
        .appendField("Enter target for this FILTER")
        .appendField(new Blockly.FieldDropdown([
        ["PROPS","PROPS"], 
        ["RDF","RDF"], 
        ["SEAS","SEAS"], 
        ["SCHEMA","SCHEMA"], 
        ["OPM","OPM"]], this.validate.bind(this)), "input_dropdown1")
        .appendField(":")
        .appendField(new Blockly.FieldDropdown(this.generateOptions.bind(this)), "input_dropdown2");
    this.appendDummyInput()
        .appendField("FILTER")
        .appendField(new Blockly.FieldTextInput("Click to enter expression"),  "input1");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  },

  generateOptions: function() {
    // this now refers to the block when it's called on the field dropdown because this was bound in init to the block 
    const otherVal = this.currentValue;
  if (otherVal === 'PROPS') {
      return [
        ["Attributes Group", "AttributesGroup"],
        ["batid attribute", "batid_attribute"], 
        ["category", "category"],
        ["extend To Structure", "extendToStructure"],
        ["fire Rating", "fireRating"],
        ["global Id Ifc Root_attribute", "globalIdIfcRoot_attribute"],
        ["is External", "isExternal"],
        ["load Bearing", "loadBearing"],
        ["longName Ifc Spatial Structure Element_attribute", "longNameIfcSpatialStructureElement_attribute"],
        ["name IfcRoot_attribute", "nameIfcRoot_attribute"],
        ["object Type Ifc Object_attribute", "objectTypeIfcObject_attribute"],
        ["overall Height Ifc Door_attribute", "overallHeightIfcDoor_attribute"],
        ["overall Width Ifc Door_attribute", "overallWidthIfcDoor_attribute"],
        ["overall Height Ifc Window_attribute", "overallHeightIfcWindow_attribute"],
        ["overall Width Ifc Window_attribute", "overallWidthIfcWindow_attribute"],
        ["part Of Attributes Group", "partOfAttributesGroup"],
        ["part Of Pset", "partOfPset"],
        ["pitch Angle", "pitchAngle"],
        ["Pset", "Pset"],
        ["reference", "reference"],
        ["rise rHeight", "riserHeight"],
        ["slope", "slope"],
        ["span", "span"],
        ["Thermal Transmittance","thermalTransmittance"],
        ["total Thickness", "totalThickness"],
        ["tread Length", "treadLength"],
      ];
    } 
    if (otherVal=='SEAS') {
      return [
        ["evaluation", "evaluation"]
      ];
    }
    if (otherVal=='SCHEMA') {
      return [["value", "value"], 
    ];
    }
    if (otherVal=='RDF') {
      return [["type", "type"], 
    ];
    }
    if (otherVal=='OPM') {
      return [["Property", "Property"], ["Current Property State", "CurrentPropertyState"]
    ];
    }
  },

  validate: function(newValue) {
    this.currentValue = newValue;
    var secondDropdown = this.getField('input_dropdown2');
    var opts = secondDropdown.getOptions(false); // This regenerates the options for the dropdown
    secondDropdown.setValue(opts[0][1]);
  }
};