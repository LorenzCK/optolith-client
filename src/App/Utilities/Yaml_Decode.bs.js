// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Ids$OptolithClient = require("../Constants/Ids.bs.js");
var Ley_List$OptolithClient = require("../../Data/Ley_List.bs.js");
var Ley_IntMap$OptolithClient = require("../../Data/Ley_IntMap.bs.js");
var Static_Item$OptolithClient = require("../Models/Static_Item.bs.js");
var Static_Pact$OptolithClient = require("../Models/Static_Pact.bs.js");
var Static_Race$OptolithClient = require("../Models/Static_Race.bs.js");
var Static_Curse$OptolithClient = require("../Models/Static_Curse.bs.js");
var Static_Skill$OptolithClient = require("../Models/Static_Skill.bs.js");
var Static_Spell$OptolithClient = require("../Models/Static_Spell.bs.js");
var Static_State$OptolithClient = require("../Models/Static_State.bs.js");
var Static_Cantrip$OptolithClient = require("../Models/Static_Cantrip.bs.js");
var Static_Culture$OptolithClient = require("../Models/Static_Culture.bs.js");
var Static_Blessing$OptolithClient = require("../Models/Static_Blessing.bs.js");
var Static_Messages$OptolithClient = require("../Models/Static_Messages.bs.js");
var Static_Advantage$OptolithClient = require("../Models/Static_Advantage.bs.js");
var Static_Attribute$OptolithClient = require("../Models/Static_Attribute.bs.js");
var Static_Condition$OptolithClient = require("../Models/Static_Condition.bs.js");
var Static_FocusRule$OptolithClient = require("../Models/Static_FocusRule.bs.js");
var Static_Profession$OptolithClient = require("../Models/Static_Profession.bs.js");
var Static_RogueSpell$OptolithClient = require("../Models/Static_RogueSpell.bs.js");
var Static_GeodeRitual$OptolithClient = require("../Models/Static_GeodeRitual.bs.js");
var Static_Publication$OptolithClient = require("../Models/Static_Publication.bs.js");
var Static_AnimistForce$OptolithClient = require("../Models/Static_AnimistForce.bs.js");
var Static_Disadvantage$OptolithClient = require("../Models/Static_Disadvantage.bs.js");
var Static_MagicalDance$OptolithClient = require("../Models/Static_MagicalDance.bs.js");
var Static_OptionalRule$OptolithClient = require("../Models/Static_OptionalRule.bs.js");
var Static_MagicalMelody$OptolithClient = require("../Models/Static_MagicalMelody.bs.js");
var Static_Prerequisites$OptolithClient = require("../Models/Static_Prerequisites.bs.js");
var Static_ZibiljaRitual$OptolithClient = require("../Models/Static_ZibiljaRitual.bs.js");
var Static_SpecialAbility$OptolithClient = require("../Models/Static_SpecialAbility.bs.js");
var Static_CombatTechnique$OptolithClient = require("../Models/Static_CombatTechnique.bs.js");
var Static_ExperienceLevel$OptolithClient = require("../Models/Static_ExperienceLevel.bs.js");
var Static_LiturgicalChant$OptolithClient = require("../Models/Static_LiturgicalChant.bs.js");
var Static_BlessedTradition$OptolithClient = require("../Models/Static_BlessedTradition.bs.js");
var Static_DominationRitual$OptolithClient = require("../Models/Static_DominationRitual.bs.js");
var Static_ElvenMagicalSong$OptolithClient = require("../Models/Static_ElvenMagicalSong.bs.js");
var Static_EquipmentPackage$OptolithClient = require("../Models/Static_EquipmentPackage.bs.js");
var Static_MagicalTradition$OptolithClient = require("../Models/Static_MagicalTradition.bs.js");
var Static_DerivedCharacteristic$OptolithClient = require("../Models/Static_DerivedCharacteristic.bs.js");

function idName(json) {
  return /* tuple */[
          Json_decode.field("id", Json_decode.$$int, json),
          Json_decode.field("name", Json_decode.string, json)
        ];
}

function liturgicalChantEnhancements(xs) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Ley_List$OptolithClient.Monad.$great$great$eq(xs, (function (x) {
                    var match = x.level3.requirePrevious;
                    return /* :: */[
                            /* tuple */[
                              x.level1.id,
                              {
                                id: /* `Generic */[
                                  61643255,
                                  x.level1.id
                                ],
                                name: x.level1.name,
                                cost: x.level1.cost,
                                prerequisites: Static_Prerequisites$OptolithClient.empty,
                                description: x.level1.effect,
                                isSecret: undefined,
                                languages: undefined,
                                continent: undefined,
                                isExtinct: undefined,
                                specializations: undefined,
                                specializationInput: undefined,
                                animalGr: undefined,
                                animalLevel: undefined,
                                target: x.target,
                                wikiEntry: undefined,
                                src: x.src,
                                errata: x.errata
                              }
                            ],
                            /* :: */[
                              /* tuple */[
                                x.level2.id,
                                {
                                  id: /* `Generic */[
                                    61643255,
                                    x.level2.id
                                  ],
                                  name: x.level2.name,
                                  cost: x.level2.cost,
                                  prerequisites: {
                                    sex: Static_Prerequisites$OptolithClient.empty.sex,
                                    race: Static_Prerequisites$OptolithClient.empty.race,
                                    culture: Static_Prerequisites$OptolithClient.empty.culture,
                                    pact: Static_Prerequisites$OptolithClient.empty.pact,
                                    social: Static_Prerequisites$OptolithClient.empty.social,
                                    primaryAttribute: Static_Prerequisites$OptolithClient.empty.primaryAttribute,
                                    activatable: x.level2.requireLevel1 ? /* :: */[
                                        {
                                          id: /* `SpecialAbility */[
                                            -789492591,
                                            Ids$OptolithClient.SpecialAbilityId.chantEnhancement
                                          ],
                                          active: true,
                                          sid: /* `Generic */[
                                            61643255,
                                            x.level1.id
                                          ],
                                          sid2: undefined,
                                          level: undefined
                                        },
                                        /* [] */0
                                      ] : /* [] */0,
                                    activatableMultiEntry: Static_Prerequisites$OptolithClient.empty.activatableMultiEntry,
                                    activatableMultiSelect: Static_Prerequisites$OptolithClient.empty.activatableMultiSelect,
                                    increasable: Static_Prerequisites$OptolithClient.empty.increasable,
                                    increasableMultiEntry: Static_Prerequisites$OptolithClient.empty.increasableMultiEntry
                                  },
                                  description: x.level2.effect,
                                  isSecret: undefined,
                                  languages: undefined,
                                  continent: undefined,
                                  isExtinct: undefined,
                                  specializations: undefined,
                                  specializationInput: undefined,
                                  animalGr: undefined,
                                  animalLevel: undefined,
                                  target: x.target,
                                  wikiEntry: undefined,
                                  src: x.src,
                                  errata: x.errata
                                }
                              ],
                              /* :: */[
                                /* tuple */[
                                  x.level3.id,
                                  {
                                    id: /* `Generic */[
                                      61643255,
                                      x.level3.id
                                    ],
                                    name: x.level3.name,
                                    cost: x.level3.cost,
                                    prerequisites: {
                                      sex: Static_Prerequisites$OptolithClient.empty.sex,
                                      race: Static_Prerequisites$OptolithClient.empty.race,
                                      culture: Static_Prerequisites$OptolithClient.empty.culture,
                                      pact: Static_Prerequisites$OptolithClient.empty.pact,
                                      social: Static_Prerequisites$OptolithClient.empty.social,
                                      primaryAttribute: Static_Prerequisites$OptolithClient.empty.primaryAttribute,
                                      activatable: match !== undefined ? (
                                          match ? /* :: */[
                                              {
                                                id: /* `SpecialAbility */[
                                                  -789492591,
                                                  Ids$OptolithClient.SpecialAbilityId.chantEnhancement
                                                ],
                                                active: true,
                                                sid: /* `Generic */[
                                                  61643255,
                                                  x.level2.id
                                                ],
                                                sid2: undefined,
                                                level: undefined
                                              },
                                              /* [] */0
                                            ] : /* :: */[
                                              {
                                                id: /* `SpecialAbility */[
                                                  -789492591,
                                                  Ids$OptolithClient.SpecialAbilityId.chantEnhancement
                                                ],
                                                active: true,
                                                sid: /* `Generic */[
                                                  61643255,
                                                  x.level1.id
                                                ],
                                                sid2: undefined,
                                                level: undefined
                                              },
                                              /* [] */0
                                            ]
                                        ) : /* [] */0,
                                      activatableMultiEntry: Static_Prerequisites$OptolithClient.empty.activatableMultiEntry,
                                      activatableMultiSelect: Static_Prerequisites$OptolithClient.empty.activatableMultiSelect,
                                      increasable: Static_Prerequisites$OptolithClient.empty.increasable,
                                      increasableMultiEntry: Static_Prerequisites$OptolithClient.empty.increasableMultiEntry
                                    },
                                    description: x.level3.effect,
                                    isSecret: undefined,
                                    languages: undefined,
                                    continent: undefined,
                                    isExtinct: undefined,
                                    specializations: undefined,
                                    specializationInput: undefined,
                                    animalGr: undefined,
                                    animalLevel: undefined,
                                    target: x.target,
                                    wikiEntry: undefined,
                                    src: x.src,
                                    errata: x.errata
                                  }
                                ],
                                /* [] */0
                              ]
                            ]
                          ];
                  })));
}

function spellEnhancements(xs) {
  return Curry._1(Ley_IntMap$OptolithClient.fromList, Ley_List$OptolithClient.Monad.$great$great$eq(xs, (function (x) {
                    var match = x.level3.requirePrevious;
                    return /* :: */[
                            /* tuple */[
                              x.level1.id,
                              {
                                id: /* `Generic */[
                                  61643255,
                                  x.level1.id
                                ],
                                name: x.level1.name,
                                cost: x.level1.cost,
                                prerequisites: Static_Prerequisites$OptolithClient.empty,
                                description: x.level1.effect,
                                isSecret: undefined,
                                languages: undefined,
                                continent: undefined,
                                isExtinct: undefined,
                                specializations: undefined,
                                specializationInput: undefined,
                                animalGr: undefined,
                                animalLevel: undefined,
                                target: x.target,
                                wikiEntry: undefined,
                                src: x.src,
                                errata: x.errata
                              }
                            ],
                            /* :: */[
                              /* tuple */[
                                x.level2.id,
                                {
                                  id: /* `Generic */[
                                    61643255,
                                    x.level2.id
                                  ],
                                  name: x.level2.name,
                                  cost: x.level2.cost,
                                  prerequisites: {
                                    sex: Static_Prerequisites$OptolithClient.empty.sex,
                                    race: Static_Prerequisites$OptolithClient.empty.race,
                                    culture: Static_Prerequisites$OptolithClient.empty.culture,
                                    pact: Static_Prerequisites$OptolithClient.empty.pact,
                                    social: Static_Prerequisites$OptolithClient.empty.social,
                                    primaryAttribute: Static_Prerequisites$OptolithClient.empty.primaryAttribute,
                                    activatable: x.level2.requireLevel1 ? /* :: */[
                                        {
                                          id: /* `SpecialAbility */[
                                            -789492591,
                                            Ids$OptolithClient.SpecialAbilityId.spellEnhancement
                                          ],
                                          active: true,
                                          sid: /* `Generic */[
                                            61643255,
                                            x.level1.id
                                          ],
                                          sid2: undefined,
                                          level: undefined
                                        },
                                        /* [] */0
                                      ] : /* [] */0,
                                    activatableMultiEntry: Static_Prerequisites$OptolithClient.empty.activatableMultiEntry,
                                    activatableMultiSelect: Static_Prerequisites$OptolithClient.empty.activatableMultiSelect,
                                    increasable: Static_Prerequisites$OptolithClient.empty.increasable,
                                    increasableMultiEntry: Static_Prerequisites$OptolithClient.empty.increasableMultiEntry
                                  },
                                  description: x.level2.effect,
                                  isSecret: undefined,
                                  languages: undefined,
                                  continent: undefined,
                                  isExtinct: undefined,
                                  specializations: undefined,
                                  specializationInput: undefined,
                                  animalGr: undefined,
                                  animalLevel: undefined,
                                  target: x.target,
                                  wikiEntry: undefined,
                                  src: x.src,
                                  errata: x.errata
                                }
                              ],
                              /* :: */[
                                /* tuple */[
                                  x.level3.id,
                                  {
                                    id: /* `Generic */[
                                      61643255,
                                      x.level3.id
                                    ],
                                    name: x.level3.name,
                                    cost: x.level3.cost,
                                    prerequisites: {
                                      sex: Static_Prerequisites$OptolithClient.empty.sex,
                                      race: Static_Prerequisites$OptolithClient.empty.race,
                                      culture: Static_Prerequisites$OptolithClient.empty.culture,
                                      pact: Static_Prerequisites$OptolithClient.empty.pact,
                                      social: Static_Prerequisites$OptolithClient.empty.social,
                                      primaryAttribute: Static_Prerequisites$OptolithClient.empty.primaryAttribute,
                                      activatable: match !== undefined ? (
                                          match ? /* :: */[
                                              {
                                                id: /* `SpecialAbility */[
                                                  -789492591,
                                                  Ids$OptolithClient.SpecialAbilityId.spellEnhancement
                                                ],
                                                active: true,
                                                sid: /* `Generic */[
                                                  61643255,
                                                  x.level2.id
                                                ],
                                                sid2: undefined,
                                                level: undefined
                                              },
                                              /* [] */0
                                            ] : /* :: */[
                                              {
                                                id: /* `SpecialAbility */[
                                                  -789492591,
                                                  Ids$OptolithClient.SpecialAbilityId.spellEnhancement
                                                ],
                                                active: true,
                                                sid: /* `Generic */[
                                                  61643255,
                                                  x.level1.id
                                                ],
                                                sid2: undefined,
                                                level: undefined
                                              },
                                              /* [] */0
                                            ]
                                        ) : /* [] */0,
                                      activatableMultiEntry: Static_Prerequisites$OptolithClient.empty.activatableMultiEntry,
                                      activatableMultiSelect: Static_Prerequisites$OptolithClient.empty.activatableMultiSelect,
                                      increasable: Static_Prerequisites$OptolithClient.empty.increasable,
                                      increasableMultiEntry: Static_Prerequisites$OptolithClient.empty.increasableMultiEntry
                                    },
                                    description: x.level3.effect,
                                    isSecret: undefined,
                                    languages: undefined,
                                    continent: undefined,
                                    isExtinct: undefined,
                                    specializations: undefined,
                                    specializationInput: undefined,
                                    animalGr: undefined,
                                    animalLevel: undefined,
                                    target: x.target,
                                    wikiEntry: undefined,
                                    src: x.src,
                                    errata: x.errata
                                  }
                                ],
                                /* [] */0
                              ]
                            ]
                          ];
                  })));
}

function decode(locale, yamlData) {
  var animistForces = Static_AnimistForce$OptolithClient.Decode.all(yamlData);
  var arcaneBardTraditions = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.arcaneBardTraditionsL10n));
  var arcaneDancerTraditions = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.arcaneDancerTraditionsL10n));
  var armorTypes = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.armorTypesL10n));
  var aspects = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.aspectsL10n));
  var attributes = Static_Attribute$OptolithClient.Decode.all(yamlData);
  var blessedTraditions = Static_BlessedTradition$OptolithClient.Decode.all(yamlData);
  var blessings = Static_Blessing$OptolithClient.Decode.all(yamlData);
  var brews = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.brewsL10n));
  var cantrips = Static_Cantrip$OptolithClient.Decode.all(yamlData);
  var combatSpecialAbilityGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.combatSpecialAbilityGroupsL10n));
  var combatTechniqueGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.combatTechniqueGroupsL10n));
  var combatTechniques = Static_CombatTechnique$OptolithClient.Decode.all(yamlData);
  var conditions = Static_Condition$OptolithClient.Decode.all(yamlData);
  var cultures = Static_Culture$OptolithClient.Decode.all(yamlData);
  var curses = Static_Curse$OptolithClient.Decode.all(yamlData);
  var derivedCharacteristics = Static_DerivedCharacteristic$OptolithClient.Decode.all(yamlData);
  var dominationRituals = Static_DominationRitual$OptolithClient.Decode.all(yamlData);
  var elvenMagicalSongs = Static_ElvenMagicalSong$OptolithClient.Decode.all(yamlData);
  var items = Static_Item$OptolithClient.Decode.all(yamlData);
  var equipmentGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.equipmentGroupsL10n));
  var equipmentPackages = Static_EquipmentPackage$OptolithClient.Decode.all(yamlData);
  var experienceLevels = Static_ExperienceLevel$OptolithClient.Decode.all(yamlData);
  var eyeColors = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.eyeColorsL10n));
  var focusRules = Static_FocusRule$OptolithClient.Decode.all(yamlData);
  var geodeRituals = Static_GeodeRitual$OptolithClient.Decode.all(yamlData);
  var hairColors = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.hairColorsL10n));
  var liturgicalChantEnhancements$1 = liturgicalChantEnhancements(Static_LiturgicalChant$OptolithClient.Decode.enhancements(yamlData));
  var liturgicalChantGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.liturgicalChantGroupsL10n));
  var liturgicalChants = Static_LiturgicalChant$OptolithClient.Decode.all(yamlData);
  var magicalDances = Static_MagicalDance$OptolithClient.Decode.all(yamlData);
  var magicalMelodies = Static_MagicalMelody$OptolithClient.Decode.all(yamlData);
  var magicalTraditions = Static_MagicalTradition$OptolithClient.Decode.all(yamlData);
  var messages = Static_Messages$OptolithClient.Decode.t(locale, yamlData.uiL10n);
  var optionalRules = Static_OptionalRule$OptolithClient.Decode.all(yamlData);
  var pacts = Static_Pact$OptolithClient.Decode.all(yamlData);
  var professions = Static_Profession$OptolithClient.Decode.all(yamlData);
  var properties = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.propertiesL10n));
  var publications = Static_Publication$OptolithClient.Decode.all(yamlData);
  var races = Static_Race$OptolithClient.Decode.all(yamlData);
  var reaches = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.reachesL10n));
  var rogueSpells = Static_RogueSpell$OptolithClient.Decode.all(yamlData);
  var skillGroups = Static_Skill$OptolithClient.Decode.groups(yamlData);
  var skills = Static_Skill$OptolithClient.Decode.all(yamlData);
  var socialStatuses = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.socialStatusesL10n));
  var specialAbilityGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.specialAbilityGroupsL10n));
  var spellEnhancements$1 = spellEnhancements(Static_Spell$OptolithClient.Decode.enhancements(yamlData));
  var spellGroups = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.spellGroupsL10n));
  var spells = Static_Spell$OptolithClient.Decode.all(yamlData);
  var states = Static_State$OptolithClient.Decode.all(yamlData);
  var subjects = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.subjectsL10n));
  var tribes = Curry._1(Ley_IntMap$OptolithClient.fromList, Json_decode.list(idName, yamlData.tribesL10n));
  var zibiljaRituals = Static_ZibiljaRitual$OptolithClient.Decode.all(yamlData);
  var advantages = Static_Advantage$OptolithClient.Decode.all(blessings, cantrips, combatTechniques, liturgicalChants, skills, spells, yamlData);
  var disadvantages = Static_Disadvantage$OptolithClient.Decode.all(blessings, cantrips, combatTechniques, liturgicalChants, skills, spells, yamlData);
  var specialAbilities = Static_SpecialAbility$OptolithClient.Decode.all(blessings, cantrips, combatTechniques, liturgicalChants, skills, spells, yamlData);
  return {
          advantages: advantages,
          animistForces: animistForces,
          arcaneBardTraditions: arcaneBardTraditions,
          arcaneDancerTraditions: arcaneDancerTraditions,
          armorTypes: armorTypes,
          aspects: aspects,
          attributes: attributes,
          blessedTraditions: blessedTraditions,
          blessings: blessings,
          brews: brews,
          cantrips: cantrips,
          combatSpecialAbilityGroups: combatSpecialAbilityGroups,
          combatTechniqueGroups: combatTechniqueGroups,
          combatTechniques: combatTechniques,
          conditions: conditions,
          cultures: cultures,
          curses: curses,
          derivedCharacteristics: derivedCharacteristics,
          disadvantages: disadvantages,
          dominationRituals: dominationRituals,
          elvenMagicalSongs: elvenMagicalSongs,
          items: items,
          equipmentGroups: equipmentGroups,
          equipmentPackages: equipmentPackages,
          experienceLevels: experienceLevels,
          eyeColors: eyeColors,
          focusRules: focusRules,
          geodeRituals: geodeRituals,
          hairColors: hairColors,
          liturgicalChantEnhancements: liturgicalChantEnhancements$1,
          liturgicalChantGroups: liturgicalChantGroups,
          liturgicalChants: liturgicalChants,
          magicalDances: magicalDances,
          magicalMelodies: magicalMelodies,
          magicalTraditions: magicalTraditions,
          messages: messages,
          optionalRules: optionalRules,
          pacts: pacts,
          professions: professions,
          properties: properties,
          publications: publications,
          races: races,
          reaches: reaches,
          rogueSpells: rogueSpells,
          skillGroups: skillGroups,
          skills: skills,
          socialStatuses: socialStatuses,
          specialAbilities: specialAbilities,
          specialAbilityGroups: specialAbilityGroups,
          spellEnhancements: spellEnhancements$1,
          spellGroups: spellGroups,
          spells: spells,
          states: states,
          subjects: subjects,
          tribes: tribes,
          zibiljaRituals: zibiljaRituals
        };
}

exports.decode = decode;
/* Ley_IntMap-OptolithClient Not a pure module */
