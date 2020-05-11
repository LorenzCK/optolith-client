// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var IC$OptolithClient = require("../Utilities/IC.bs.js");
var Ley_Int$OptolithClient = require("../../Data/Ley_Int.bs.js");
var Yaml_Zip$OptolithClient = require("../Utilities/Yaml_Zip.bs.js");
var JsonStrict$OptolithClient = require("../Utilities/JsonStrict.bs.js");
var Ley_IntMap$OptolithClient = require("../../Data/Ley_IntMap.bs.js");
var Ley_Option$OptolithClient = require("../../Data/Ley_Option.bs.js");
var CheckModifier$OptolithClient = require("./CheckModifier.bs.js");
var Static_Erratum$OptolithClient = require("./Static_Erratum.bs.js");
var Static_SourceRef$OptolithClient = require("./Static_SourceRef.bs.js");

function enhancementLevelL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json),
          effect: Json_decode.field("effect", Json_decode.string, json)
        };
}

function enhancementL10n(json) {
  return {
          target: Json_decode.field("target", Json_decode.$$int, json),
          level1: Json_decode.field("level1", enhancementLevelL10n, json),
          level2: Json_decode.field("level2", enhancementLevelL10n, json),
          level3: Json_decode.field("level3", enhancementLevelL10n, json),
          src: Json_decode.field("src", Static_SourceRef$OptolithClient.Decode.list, json),
          errata: Json_decode.field("errata", Static_Erratum$OptolithClient.Decode.list, json)
        };
}

function enhancementLevel1Univ(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          cost: Json_decode.field("cost", Json_decode.$$int, json)
        };
}

function level3Prerequisite(json) {
  var x = Json_decode.$$int(json);
  if (x !== 1) {
    throw [
          Json_decode.DecodeError,
          "Unknown level 2 prerequisite: " + Ley_Int$OptolithClient.show(x)
        ];
  } else {
    return 1;
  }
}

function enhancementLevel2Univ(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          cost: Json_decode.field("cost", Json_decode.$$int, json),
          requireLevel1: Ley_Option$OptolithClient.isSome(JsonStrict$OptolithClient.optionalField("previousRequirement", level3Prerequisite, json))
        };
}

function level3Prerequisite$1(json) {
  var x = Json_decode.$$int(json);
  if (x !== 1) {
    if (x !== 2) {
      throw [
            Json_decode.DecodeError,
            "Unknown level 3 prerequisite: " + Ley_Int$OptolithClient.show(x)
          ];
    } else {
      return /* Second */1;
    }
  } else {
    return /* First */0;
  }
}

function enhancementLevel3Univ(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          cost: Json_decode.field("cost", Json_decode.$$int, json),
          requirePrevious: JsonStrict$OptolithClient.optionalField("previousRequirement", level3Prerequisite$1, json)
        };
}

function enhancementUniv(json) {
  return {
          target: Json_decode.field("target", Json_decode.$$int, json),
          level1: Json_decode.field("level1", enhancementLevel1Univ, json),
          level2: Json_decode.field("level2", enhancementLevel2Univ, json),
          level3: Json_decode.field("level3", enhancementLevel3Univ, json)
        };
}

function enhancement(univ, l10n) {
  return {
          target: univ.target,
          level1: {
            id: univ.level1.id,
            name: l10n.level1.name,
            effect: l10n.level1.effect,
            cost: univ.level1.cost
          },
          level2: {
            id: univ.level2.id,
            name: l10n.level2.name,
            effect: l10n.level2.effect,
            cost: univ.level2.cost,
            requireLevel1: univ.level2.requireLevel1
          },
          level3: {
            id: univ.level3.id,
            name: l10n.level3.name,
            effect: l10n.level3.effect,
            cost: univ.level3.cost,
            requirePrevious: univ.level3.requirePrevious
          },
          src: l10n.src,
          errata: l10n.errata
        };
}

function enhancements(yamlData) {
  return Yaml_Zip$OptolithClient.zipBy(Ley_Int$OptolithClient.show, enhancement, (function (x) {
                return x.target;
              }), (function (x) {
                return x.target;
              }), Json_decode.list(enhancementUniv, yamlData.liturgicalChantEnhancementsUniv), Json_decode.list(enhancementL10n, yamlData.liturgicalChantEnhancementsL10n));
}

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json),
          effect: Json_decode.field("effect", Json_decode.string, json),
          castingTime: Json_decode.field("castingTime", Json_decode.string, json),
          castingTimeShort: Json_decode.field("castingTimeShort", Json_decode.string, json),
          kpCost: Json_decode.field("kpCost", Json_decode.string, json),
          kpCostShort: Json_decode.field("kpCostShort", Json_decode.string, json),
          range: Json_decode.field("range", Json_decode.string, json),
          rangeShort: Json_decode.field("rangeShort", Json_decode.string, json),
          duration: Json_decode.field("duration", Json_decode.string, json),
          durationShort: Json_decode.field("durationShort", Json_decode.string, json),
          target: Json_decode.field("target", Json_decode.string, json),
          src: Json_decode.field("src", Static_SourceRef$OptolithClient.Decode.list, json),
          errata: Json_decode.field("errata", Static_Erratum$OptolithClient.Decode.list, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          check1: Json_decode.field("check1", Json_decode.$$int, json),
          check2: Json_decode.field("check2", Json_decode.$$int, json),
          check3: Json_decode.field("check3", Json_decode.$$int, json),
          checkMod: JsonStrict$OptolithClient.optionalField("checkMod", CheckModifier$OptolithClient.Decode.t, json),
          castingTimeNoMod: Json_decode.field("castingTimeNoMod", Json_decode.bool, json),
          kpCostNoMod: Json_decode.field("kpCostNoMod", Json_decode.bool, json),
          rangeNoMod: Json_decode.field("rangeNoMod", Json_decode.bool, json),
          durationNoMod: Json_decode.field("durationNoMod", Json_decode.bool, json),
          traditions: Json_decode.field("traditions", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json),
          aspects: JsonStrict$OptolithClient.optionalField("traditions", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json),
          ic: Json_decode.field("ic", IC$OptolithClient.Decode.t, json),
          gr: Json_decode.field("gr", Json_decode.$$int, json)
        };
}

function t(univ, l10n) {
  return /* tuple */[
          univ.id,
          {
            id: univ.id,
            name: l10n.name,
            check: /* tuple */[
              univ.check1,
              univ.check2,
              univ.check3
            ],
            checkMod: univ.checkMod,
            effect: l10n.effect,
            castingTime: l10n.castingTime,
            castingTimeShort: l10n.castingTimeShort,
            castingTimeNoMod: univ.castingTimeNoMod,
            kpCost: l10n.kpCost,
            kpCostShort: l10n.kpCostShort,
            kpCostNoMod: univ.kpCostNoMod,
            range: l10n.range,
            rangeShort: l10n.rangeShort,
            rangeNoMod: univ.rangeNoMod,
            duration: l10n.duration,
            durationShort: l10n.durationShort,
            durationNoMod: univ.durationNoMod,
            target: l10n.target,
            traditions: univ.traditions,
            aspects: Ley_Option$OptolithClient.fromOption(/* [] */0, univ.aspects),
            ic: univ.ic,
            gr: univ.gr,
            src: l10n.src,
            errata: l10n.errata
          }
        ];
}

function all(yamlData) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Yaml_Zip$OptolithClient.zipBy(Ley_Int$OptolithClient.show, t, (function (x) {
                    return x.id;
                  }), (function (x) {
                    return x.id;
                  }), Json_decode.list(tUniv, yamlData.liturgicalChantsUniv), Json_decode.list(tL10n, yamlData.liturgicalChantsL10n)));
}

var Decode = {
  enhancementLevelL10n: enhancementLevelL10n,
  enhancementL10n: enhancementL10n,
  enhancementLevel1Univ: enhancementLevel1Univ,
  enhancementLevel2Univ: enhancementLevel2Univ,
  level3Prerequisite: level3Prerequisite$1,
  enhancementLevel3Univ: enhancementLevel3Univ,
  enhancementUniv: enhancementUniv,
  enhancement: enhancement,
  enhancements: enhancements,
  tL10n: tL10n,
  tUniv: tUniv,
  t: t,
  all: all
};

exports.Decode = Decode;
/* Ley_IntMap-OptolithClient Not a pure module */
