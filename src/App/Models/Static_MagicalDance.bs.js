// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var IC$OptolithClient = require("../Utilities/IC.bs.js");
var Ley_Int$OptolithClient = require("../../Data/Ley_Int.bs.js");
var Yaml_Zip$OptolithClient = require("../Utilities/Yaml_Zip.bs.js");
var Ley_IntMap$OptolithClient = require("../../Data/Ley_IntMap.bs.js");
var Ley_IntSet$OptolithClient = require("../../Data/Ley_IntSet.bs.js");
var Static_Erratum$OptolithClient = require("./Static_Erratum.bs.js");
var Static_SourceRef$OptolithClient = require("./Static_SourceRef.bs.js");

function nameByTradition(json) {
  return /* tuple */[
          Json_decode.field("id", Json_decode.$$int, json),
          Json_decode.field("name", Json_decode.string, json)
        ];
}

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json),
          nameByTradition: Json_decode.field("nameByTradition", (function (param) {
                  return Json_decode.list(nameByTradition, param);
                }), json),
          effect: Json_decode.field("effect", Json_decode.string, json),
          duration: Json_decode.field("duration", Json_decode.string, json),
          durationShort: Json_decode.field("durationShort", Json_decode.string, json),
          aeCost: Json_decode.field("aeCost", Json_decode.string, json),
          aeCostShort: Json_decode.field("aeCostShort", Json_decode.string, json),
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
          musictraditions: Json_decode.field("musictraditions", (function (param) {
                  return Json_decode.list(Json_decode.$$int, param);
                }), json),
          property: Json_decode.field("property", Json_decode.$$int, json),
          ic: Json_decode.field("ic", IC$OptolithClient.Decode.t, json)
        };
}

function t(univ, l10n) {
  return /* tuple */[
          univ.id,
          {
            id: univ.id,
            name: l10n.name,
            nameByTradition: Curry._1(Ley_IntMap$OptolithClient.fromList, l10n.nameByTradition),
            check: /* tuple */[
              univ.check1,
              univ.check2,
              univ.check3
            ],
            effect: l10n.effect,
            duration: l10n.duration,
            durationShort: l10n.durationShort,
            aeCost: l10n.aeCost,
            aeCostShort: l10n.aeCostShort,
            musictraditions: Curry._1(Ley_IntSet$OptolithClient.fromList, univ.musictraditions),
            property: univ.property,
            ic: univ.ic,
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
                  }), Json_decode.list(tUniv, yamlData.magicalDancesUniv), Json_decode.list(tL10n, yamlData.magicalDancesL10n)));
}

var Decode = {
  nameByTradition: nameByTradition,
  tL10n: tL10n,
  tUniv: tUniv,
  t: t,
  all: all
};

exports.Decode = Decode;
/* Ley_IntMap-OptolithClient Not a pure module */
