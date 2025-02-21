{
  "status": "ok",
  "request_id": "236d2717-44b0-4e32-b53b-a3a8ab15442d",
  "households": [
    {
      "id": "dfff69a9-c33e-4b47-98f5-489c7af730fd",
      "name": "Квартира",
      "type": "households.types.personal",
      "location": {
        "address": "Пермь, улица Чернышевского, 20, подъезд 3",
        "short_address": "Улица Чернышевского, 20, подъезд 3"
      },
      "is_current": true,
      "aliases": [],
      "rooms": [
        {
          "id": "ff02ea11-811a-46e7-8091-7bd9f63d64d7",
          "name": "Балкон",
          "items": [
            {
              "id": "35e3f2df-4372-452b-a61a-c6bf4f5cf4a2",
              "name": "Датчик климата балкон",
              "type": "devices.types.sensor.climate",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 84,
                    "status": "normal",
                    "value": 84
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "state_changed_at": "2025-02-21T05:49:39Z",
                  "last_updated": "2025-02-21T05:49:39Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": -6.9
                  },
                  "state_changed_at": "2025-02-21T06:13:08Z",
                  "last_updated": "2025-02-21T06:13:08Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "pressure",
                    "name": "давление",
                    "unit": "unit.pressure.mmhg"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 762
                  },
                  "state_changed_at": "2025-02-21T05:50:10Z",
                  "last_updated": "2025-02-21T06:13:08Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "humidity",
                    "name": "влажность",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 71,
                    "status": "danger",
                    "value": 71
                  },
                  "state_changed_at": "2025-02-21T06:13:08Z",
                  "last_updated": "2025-02-21T06:13:08Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Балкон",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740118389.152718,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-07-04T18:11:28Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "",
                  "model": "lumi.weather",
                  "hw_version": "",
                  "sw_version": "5",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "900dca1a-e53a-418c-82cc-5ebb8795e266",
              "name": "Свет балкон",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Балкон",
              "status_info": {
                "status": "online",
                "updated": 1739266431.16809,
                "changed": 1734101796.169981
              },
              "state": "online",
              "created": "2024-08-08T13:25:23Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "一路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            }
          ],
          "background_image": {
            "id": "balcony"
          }
        },
        {
          "id": "9a567507-d8a4-4957-9779-8eb5f667a949",
          "name": "Ванная",
          "items": [
            {
              "id": "ed6418d2-bdf1-4600-af24-e8d446daedb3",
              "name": "Датчик движения ванная",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T04:06:02Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "illumination",
                    "name": "освещенность",
                    "unit": "unit.illumination.lux"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 1
                  },
                  "state_changed_at": "2025-02-21T06:29:47Z",
                  "last_updated": "2025-02-21T06:29:47Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-21T06:29:32Z",
                  "last_updated": "2025-02-21T06:29:32Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119388.53484,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-08-05T14:14:33Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ttcovulf",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "dc478c79-950f-471e-8c0e-4c951f0c77d6",
              "name": "Датчик движения туалет",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T03:40:18Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "illumination",
                    "name": "освещенность",
                    "unit": "unit.illumination.lux"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 1
                  },
                  "state_changed_at": "2025-02-21T06:29:52Z",
                  "last_updated": "2025-02-21T06:29:52Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-21T06:29:32Z",
                  "last_updated": "2025-02-21T06:29:32Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119394.014771,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-08-23T19:50:35Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ttcovulf",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "eb1aac9f-4f5e-481a-acd3-731a8b3d489c",
              "name": "Датчик климата",
              "type": "devices.types.sensor.climate",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T03:21:02Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "humidity",
                    "name": "влажность",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 31,
                    "status": "warning",
                    "value": 31
                  },
                  "state_changed_at": "2025-02-21T05:58:02Z",
                  "last_updated": "2025-02-21T05:58:02Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 27
                  },
                  "state_changed_at": "2025-02-20T23:56:50Z",
                  "last_updated": "2025-02-21T05:58:02Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117483.97409,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-09-29T08:30:09Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ysm4dsb1",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "131",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "27dd3e50-db3a-4d8d-a3aa-038edc1df56e",
              "name": "Датчик протечки воды",
              "type": "devices.types.sensor.water_leak",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T06:06:25Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "water_leak",
                    "name": "протечка воды",
                    "events": [
                      {
                        "value": "leak",
                        "name": "протечка"
                      },
                      {
                        "value": "dry",
                        "name": "нет протечки"
                      }
                    ]
                  },
                  "state": {
                    "instance": "water_leak",
                    "status": "normal",
                    "value": "dry"
                  },
                  "last_updated": "2025-02-12T05:47:07Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117985.980594,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-08-06T18:16:03Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZ3000_k4ej3ww2",
                  "model": "TS0207",
                  "hw_version": "1",
                  "sw_version": "65",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "68695c4b-c4b3-4eef-bd06-0788f0b2b1e3",
              "name": "Свет ванная",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "updated": 1740119975.0379,
                "changed": 1738948113.494048
              },
              "state": "online",
              "created": "2024-08-08T13:25:23Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "一路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "965bd43a-5d12-48ad-8f2a-bc0a7b20991c",
              "name": "Станция Мини new",
              "type": "devices.types.smart_speaker.yandex.station.mini_2",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station.mini_2_updated.png/orig",
              "capabilities": [
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "text_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "phrase_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "weather",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "weather"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "volume",
                    "value": {
                      "value": 3
                    }
                  },
                  "parameters": {
                    "instance": "volume"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "music_play",
                    "value": {
                      "play_in_background": true
                    }
                  },
                  "parameters": {
                    "instance": "music_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "news",
                    "value": {
                      "topic": "index",
                      "play_in_background": true,
                      "topic_name": "Главное"
                    }
                  },
                  "parameters": {
                    "instance": "news"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "sound_play",
                    "value": {
                      "sound": "chainsaw-1",
                      "sound_name": "Бензопила"
                    }
                  },
                  "parameters": {
                    "instance": "sound_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "stop_everything",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "stop_everything"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "tts",
                    "value": {
                      "text": "",
                      "whisper": false,
                      "lang": ""
                    }
                  },
                  "parameters": {
                    "instance": "tts"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "alice_show",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "alice_show"
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "voice_activity",
                    "name": "активация по голосу",
                    "events": [
                      {
                        "value": "speech_finished",
                        "name": "заговорили рядом",
                        "can_be_deferred": true
                      },
                      {
                        "value": "no_speech_within_5m",
                        "name": "не слышит голос 5 минут"
                      },
                      {
                        "value": "no_speech_within_10m",
                        "name": "не слышит голос 10 минут"
                      },
                      {
                        "value": "no_speech_within_30m",
                        "name": "не слышит голос 30 минут"
                      },
                      {
                        "value": "speech_finished_multiple",
                        "name": "заговорили рядом"
                      }
                    ]
                  },
                  "state": null,
                  "last_updated": "2024-10-22T09:34:08Z"
                }
              ],
              "item_type": "device",
              "skill_id": "Q",
              "quasar_info": {
                "device_id": "M0011Y30095FXK",
                "platform": "yandexmini_2",
                "color": "black",
                "multiroom_available": true,
                "multistep_scenarios_available": true,
                "device_discovery_methods": [
                  "matter"
                ],
                "device_setup_methods": [
                  "ble"
                ]
              },
              "room_name": "Ванная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1739485995.506471,
                "changed": 1738253692.370784
              },
              "state": "online",
              "created": "2022-11-17T15:15:42Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex Services AG",
                  "model": "YNDX-00020"
                }
              }
            },
            {
              "id": "3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b",
              "name": "Теплый пол",
              "type": "devices.types.thermostat",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.range",
                  "state": {
                    "instance": "temperature",
                    "value": 35
                  },
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius",
                    "random_access": true,
                    "looped": false,
                    "range": {
                      "min": 5,
                      "max": 45,
                      "precision": 0.5
                    }
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 24
                  },
                  "state_changed_at": "2025-02-06T07:08:39Z",
                  "last_updated": "2025-02-06T07:08:39Z"
                }
              ],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Ванная",
              "status_info": {
                "status": "no_data",
                "updated": 1739806692.437239,
                "changed": 1738825719.7466912
              },
              "state": "no_data",
              "created": "2024-08-08T13:25:25Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "009 采暖",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            }
          ],
          "background_image": {
            "id": "bathroom"
          }
        },
        {
          "id": "c01188f0-3cb2-4db2-9dea-5d09c46897f8",
          "name": "Гардероб",
          "items": [
            {
              "id": "76fb7334-6d56-4721-ad96-6103530047ee",
              "name": "Датчик движений",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T05:57:33Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "illumination",
                    "name": "освещенность",
                    "unit": "unit.illumination.lux"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 1
                  },
                  "state_changed_at": "2025-02-20T19:26:16Z",
                  "last_updated": "2025-02-20T19:26:16Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-20T10:26:32Z",
                  "last_updated": "2025-02-20T10:26:32Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Гардероб",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117454.041246,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-07-31T10:53:54Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ttcovulf",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "bd142373-4be7-4a22-ba7f-67c62520e419",
              "name": "Свет гардероб",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гардероб",
              "status_info": {
                "status": "online",
                "updated": 1740047494.139372,
                "changed": 1731230146.227602
              },
              "state": "online",
              "created": "2024-08-08T13:25:22Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            }
          ],
          "background_image": {
            "id": "hallway"
          }
        },
        {
          "id": "43dda2af-fed9-49f0-a189-4cf9a1e4e5fa",
          "name": "Гостиная",
          "items": [
            {
              "id": "00ea1a68-9342-4f10-b254-bbd209a753c7",
              "name": "Гирлянда",
              "type": "devices.types.light.garland",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "power",
                    "name": "потребляемая мощность",
                    "unit": "unit.watt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-01-27T12:25:05Z",
                  "last_updated": "2025-01-27T12:25:05Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "voltage",
                    "name": "текущее напряжение",
                    "unit": "unit.volt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 234
                  },
                  "state_changed_at": "2025-01-27T12:43:58Z",
                  "last_updated": "2025-01-27T12:43:58Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "amperage",
                    "name": "потребление тока",
                    "unit": "unit.ampere"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-01-27T12:42:18Z",
                  "last_updated": "2025-01-27T12:42:18Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Гостиная",
              "status_info": {
                "status": "no_data",
                "updated": 1740119785.894254,
                "changed": 1737981838.4594262
              },
              "state": "no_data",
              "render_info": {
                "icon": {
                  "id": "yandex.socket.phoenix",
                  "color": "black"
                }
              },
              "created": "2024-12-30T11:37:08Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00540",
                  "hw_version": "0",
                  "sw_version": "18",
                  "setup_code": "04611731516",
                  "serial_number": "HP00NR3000B6RK"
                }
              }
            },
            {
              "id": "9bc6bf24-67ea-4815-895d-05cc3df839bf",
              "name": "Гирлянда",
              "type": "devices.types.light.garland",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.mode",
                  "state": {
                    "instance": "thermostat",
                    "value": "cool"
                  },
                  "parameters": {
                    "instance": "thermostat",
                    "name": "термостат",
                    "modes": [
                      {
                        "value": "cool",
                        "name": "Охлаждение"
                      },
                      {
                        "value": "heat",
                        "name": "Нагрев"
                      },
                      {
                        "value": "fan_only",
                        "name": "Вентиляция"
                      },
                      {
                        "value": "dry",
                        "name": "Осушение"
                      },
                      {
                        "value": "auto",
                        "name": "Авто"
                      },
                      {
                        "value": "preheat",
                        "name": "Подогрев"
                      }
                    ]
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1740119786.206,
                "changed": 1738612793.865252
              },
              "state": "online",
              "created": "2024-12-30T11:28:39Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "SMART LIFE",
                  "model": "SP112_RTL",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f",
              "name": "Датчик климата гостиная",
              "type": "devices.types.sensor.climate",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T06:22:50Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "humidity",
                    "name": "влажность",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 36,
                    "status": "warning",
                    "value": 36
                  },
                  "state_changed_at": "2025-02-21T06:33:32Z",
                  "last_updated": "2025-02-21T06:33:32Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 25.1
                  },
                  "state_changed_at": "2025-02-21T06:33:32Z",
                  "last_updated": "2025-02-21T06:33:32Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119614.108565,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-06-19T12:56:23Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ysm4dsb1",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "95a0b119-85e0-40ec-837b-b771fa566904",
              "name": "Зарядка планшет",
              "type": "devices.types.socket",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.mode",
                  "state": {
                    "instance": "thermostat",
                    "value": "cool"
                  },
                  "parameters": {
                    "instance": "thermostat",
                    "name": "термостат",
                    "modes": [
                      {
                        "value": "cool",
                        "name": "Охлаждение"
                      },
                      {
                        "value": "heat",
                        "name": "Нагрев"
                      },
                      {
                        "value": "fan_only",
                        "name": "Вентиляция"
                      },
                      {
                        "value": "dry",
                        "name": "Осушение"
                      },
                      {
                        "value": "auto",
                        "name": "Авто"
                      },
                      {
                        "value": "preheat",
                        "name": "Подогрев"
                      }
                    ]
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1738825720.755574,
                "changed": 1738750505.845319
              },
              "state": "online",
              "created": "2024-12-30T11:28:39Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "SMART LIFE",
                  "model": "SP112_RTL",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "9f9070ba-b7b4-4d44-978d-69936a9bbd54",
              "name": "Переключатель 1",
              "type": "devices.types.socket",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.mode",
                  "state": {
                    "instance": "thermostat",
                    "value": "cool"
                  },
                  "parameters": {
                    "instance": "thermostat",
                    "name": "термостат",
                    "modes": [
                      {
                        "value": "cool",
                        "name": "Охлаждение"
                      },
                      {
                        "value": "heat",
                        "name": "Нагрев"
                      },
                      {
                        "value": "fan_only",
                        "name": "Вентиляция"
                      },
                      {
                        "value": "dry",
                        "name": "Осушение"
                      },
                      {
                        "value": "auto",
                        "name": "Авто"
                      },
                      {
                        "value": "preheat",
                        "name": "Подогрев"
                      }
                    ]
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1738825720.755574,
                "changed": 1738750505.845319
              },
              "state": "online",
              "created": "2024-12-30T11:28:39Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "SMART LIFE",
                  "model": "SP112_RTL",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "cdd3087d-0d2b-400d-b1c9-cd6849b1f6ab",
              "name": "Пылесос",
              "type": "devices.types.vacuum_cleaner",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.vacuum_cleaner.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.mode",
                  "state": {
                    "instance": "work_speed",
                    "value": "quiet"
                  },
                  "parameters": {
                    "instance": "work_speed",
                    "name": "скорость работы",
                    "modes": [
                      {
                        "value": "normal",
                        "name": "Нормальный"
                      },
                      {
                        "value": "quiet",
                        "name": "Тихий"
                      }
                    ]
                  }
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.toggle",
                  "state": {
                    "instance": "pause",
                    "value": true
                  },
                  "parameters": {
                    "instance": "pause",
                    "name": "пауза"
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "state_changed_at": "2025-02-20T09:36:55Z",
                  "last_updated": "2025-02-20T09:36:55Z"
                }
              ],
              "item_type": "device",
              "skill_id": "ad26f8c2-fc31-4928-a653-d829fda7e6c2",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740044215.219942,
                "changed": 1738849862.876348
              },
              "state": "online",
              "created": "2024-11-10T14:01:50Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "ijai",
                  "model": "ijai.vacuum.v17",
                  "sw_version": "4.3.3_0028"
                }
              }
            },
            {
              "id": "a8bb3e9e-7393-4683-8b30-761f1dcd2e89",
              "name": "Радиатор",
              "type": "devices.types.thermostat",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.range",
                  "state": {
                    "instance": "temperature",
                    "value": 16
                  },
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius",
                    "random_access": true,
                    "looped": false,
                    "range": {
                      "min": 5,
                      "max": 35,
                      "precision": 1
                    }
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1739964813.44609,
                "changed": 1734109252.277863
              },
              "state": "online",
              "created": "2024-08-09T15:39:29Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "ME167",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "4c661077-a9fa-47ef-bf60-79bce8d3c673",
              "name": "Свет гостиная",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1738825720.755574,
                "changed": 1734022480.504348
              },
              "state": "online",
              "created": "2024-08-08T13:25:22Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "774c6faa-fcb0-466b-a5ad-4ba91bf8a823",
              "name": "Свет гостиная 1",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1739974647.62443,
                "changed": 1738072742.37062
              },
              "state": "online",
              "created": "2024-08-08T13:25:22Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "ab1142bf-a8de-4735-9f18-6bc2e3d031fb",
              "name": "Свет гостиная 2",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1739974647.62443,
                "changed": 1738072742.37062
              },
              "state": "online",
              "created": "2024-08-08T13:25:24Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "7cef70cb-60fb-4064-a978-58a0097568fc",
              "name": "Телевизор",
              "type": "devices.types.media_device.tv",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.media_device.tv.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": false,
                  "type": "devices.capabilities.on_off",
                  "state": null,
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.range",
                  "state": null,
                  "parameters": {
                    "instance": "volume",
                    "name": "громкость",
                    "unit": "",
                    "random_access": false,
                    "looped": false
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.range",
                  "state": null,
                  "parameters": {
                    "instance": "channel",
                    "name": "канал",
                    "unit": "",
                    "random_access": true,
                    "looped": false
                  }
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.toggle",
                  "state": {
                    "instance": "mute",
                    "value": true
                  },
                  "parameters": {
                    "instance": "mute",
                    "name": "без звука"
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "updated": 1740117645.17337,
                "changed": 1723476594.075531
              },
              "state": "online",
              "created": "2024-08-08T13:25:25Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "SMART LIFE",
                  "model": "YRC11",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "5524911b-0d75-465e-9ddb-2e4ed6040eda",
              "name": "Яндекс Станция Макс",
              "type": "devices.types.smart_speaker.yandex.station_2",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station_2.png/orig",
              "capabilities": [
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "text_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "phrase_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "weather",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "weather"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "volume",
                    "value": {
                      "value": 3
                    }
                  },
                  "parameters": {
                    "instance": "volume"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "music_play",
                    "value": {
                      "play_in_background": true
                    }
                  },
                  "parameters": {
                    "instance": "music_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "news",
                    "value": {
                      "topic": "index",
                      "play_in_background": true,
                      "topic_name": "Главное"
                    }
                  },
                  "parameters": {
                    "instance": "news"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "sound_play",
                    "value": {
                      "sound": "chainsaw-1",
                      "sound_name": "Бензопила"
                    }
                  },
                  "parameters": {
                    "instance": "sound_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "stop_everything",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "stop_everything"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "tts",
                    "value": {
                      "text": "",
                      "whisper": false,
                      "lang": ""
                    }
                  },
                  "parameters": {
                    "instance": "tts"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "alice_show",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "alice_show"
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "voice_activity",
                    "name": "активация по голосу",
                    "events": [
                      {
                        "value": "speech_finished",
                        "name": "заговорили рядом",
                        "can_be_deferred": true
                      },
                      {
                        "value": "no_speech_within_5m",
                        "name": "не слышит голос 5 минут"
                      },
                      {
                        "value": "no_speech_within_10m",
                        "name": "не слышит голос 10 минут"
                      },
                      {
                        "value": "no_speech_within_30m",
                        "name": "не слышит голос 30 минут"
                      },
                      {
                        "value": "speech_finished_multiple",
                        "name": "заговорили рядом"
                      }
                    ]
                  },
                  "state": null,
                  "last_updated": "2024-10-22T09:49:49Z"
                }
              ],
              "item_type": "device",
              "skill_id": "Q",
              "quasar_info": {
                "device_id": "X11N5M500JMV4K",
                "platform": "yandexstation_2",
                "color": "black",
                "multiroom_available": true,
                "multistep_scenarios_available": true,
                "device_discovery_methods": [
                  "zigbee",
                  "matter"
                ],
                "device_setup_methods": []
              },
              "room_name": "Гостиная",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117706.139569,
                "changed": 1738253892.426779
              },
              "state": "online",
              "created": "2024-10-22T09:34:07Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex Services AG",
                  "model": "YNDX-00053"
                }
              }
            }
          ],
          "background_image": {
            "id": "living_room"
          }
        },
        {
          "id": "bb80df0e-ffb2-4729-884d-a1f6e998c2ff",
          "name": "Кухня",
          "items": [
            {
              "id": "a8116ba1-1847-4442-8c90-0de25f456b3a",
              "name": "Датчик движения",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T03:09:00Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-21T06:38:59Z",
                  "last_updated": "2025-02-21T06:38:59Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740120001.530951,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-07-19T11:11:12Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYATEC-h542kfah",
                  "model": "RH3040",
                  "hw_version": "1",
                  "sw_version": "66",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "ebf2f3b3-d8c5-4237-825b-7aa592a56e78",
              "name": "Датчик движения кухня",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T03:35:54Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "illumination",
                    "name": "освещенность",
                    "unit": "unit.illumination.lux"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 2226
                  },
                  "state_changed_at": "2025-02-21T06:40:06Z",
                  "last_updated": "2025-02-21T06:40:06Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-21T06:40:05Z",
                  "last_updated": "2025-02-21T06:40:05Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740120007.396564,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-08-23T19:49:00Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ttcovulf",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "2c91df43-74c6-43f5-a4e6-101bb6c6b22e",
              "name": "Подсветка",
              "type": "devices.types.light.strip",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.strip.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.color_setting",
                  "state": {
                    "instance": "color",
                    "value": {
                      "id": "",
                      "name": "",
                      "type": "multicolor",
                      "value": {
                        "h": 229,
                        "s": 29,
                        "v": 100
                      }
                    }
                  },
                  "parameters": {
                    "instance": "color",
                    "name": "цвет",
                    "palette": [
                      {
                        "id": "soft_white",
                        "name": "Мягкий белый",
                        "type": "white",
                        "value": {
                          "h": 32,
                          "s": 67,
                          "v": 100
                        }
                      },
                      {
                        "id": "warm_white",
                        "name": "Теплый белый",
                        "type": "white",
                        "value": {
                          "h": 33,
                          "s": 49,
                          "v": 100
                        }
                      },
                      {
                        "id": "white",
                        "name": "Белый",
                        "type": "white",
                        "value": {
                          "h": 33,
                          "s": 28,
                          "v": 100
                        }
                      },
                      {
                        "id": "daylight",
                        "name": "Дневной белый",
                        "type": "white",
                        "value": {
                          "h": 36,
                          "s": 35,
                          "v": 97
                        }
                      },
                      {
                        "id": "cold_white",
                        "name": "Холодный белый",
                        "type": "white",
                        "value": {
                          "h": 222,
                          "s": 4,
                          "v": 98
                        }
                      },
                      {
                        "id": "red",
                        "name": "Красный",
                        "type": "multicolor",
                        "value": {
                          "h": 0,
                          "s": 65,
                          "v": 100
                        }
                      },
                      {
                        "id": "coral",
                        "name": "Коралловый",
                        "type": "multicolor",
                        "value": {
                          "h": 8,
                          "s": 55,
                          "v": 98
                        }
                      },
                      {
                        "id": "orange",
                        "name": "Оранжевый",
                        "type": "multicolor",
                        "value": {
                          "h": 25,
                          "s": 70,
                          "v": 100
                        }
                      },
                      {
                        "id": "yellow",
                        "name": "Желтый",
                        "type": "multicolor",
                        "value": {
                          "h": 40,
                          "s": 70,
                          "v": 100
                        }
                      },
                      {
                        "id": "lime",
                        "name": "Салатовый",
                        "type": "multicolor",
                        "value": {
                          "h": 73,
                          "s": 96,
                          "v": 100
                        }
                      },
                      {
                        "id": "green",
                        "name": "Зеленый",
                        "type": "multicolor",
                        "value": {
                          "h": 120,
                          "s": 55,
                          "v": 90
                        }
                      },
                      {
                        "id": "emerald",
                        "name": "Изумрудный",
                        "type": "multicolor",
                        "value": {
                          "h": 160,
                          "s": 80,
                          "v": 90
                        }
                      },
                      {
                        "id": "turquoise",
                        "name": "Бирюзовый",
                        "type": "multicolor",
                        "value": {
                          "h": 180,
                          "s": 80,
                          "v": 90
                        }
                      },
                      {
                        "id": "cyan",
                        "name": "Голубой",
                        "type": "multicolor",
                        "value": {
                          "h": 190,
                          "s": 60,
                          "v": 100
                        }
                      },
                      {
                        "id": "blue",
                        "name": "Синий",
                        "type": "multicolor",
                        "value": {
                          "h": 225,
                          "s": 55,
                          "v": 90
                        }
                      },
                      {
                        "id": "moonlight",
                        "name": "Лунный",
                        "type": "multicolor",
                        "value": {
                          "h": 231,
                          "s": 10,
                          "v": 100
                        }
                      },
                      {
                        "id": "lavender",
                        "name": "Сиреневый",
                        "type": "multicolor",
                        "value": {
                          "h": 255,
                          "s": 55,
                          "v": 90
                        }
                      },
                      {
                        "id": "violet",
                        "name": "Фиолетовый",
                        "type": "multicolor",
                        "value": {
                          "h": 270,
                          "s": 55,
                          "v": 90
                        }
                      },
                      {
                        "id": "purple",
                        "name": "Пурпурный",
                        "type": "multicolor",
                        "value": {
                          "h": 300,
                          "s": 70,
                          "v": 90
                        }
                      },
                      {
                        "id": "orchid",
                        "name": "Розовый",
                        "type": "multicolor",
                        "value": {
                          "h": 305,
                          "s": 50,
                          "v": 90
                        }
                      },
                      {
                        "id": "raspberry",
                        "name": "Малиновый",
                        "type": "multicolor",
                        "value": {
                          "h": 345,
                          "s": 70,
                          "v": 90
                        }
                      },
                      {
                        "id": "mauve",
                        "name": "Лиловый",
                        "type": "multicolor",
                        "value": {
                          "h": 340,
                          "s": 45,
                          "v": 90
                        }
                      }
                    ],
                    "custom_palette": [
                      {
                        "id": "74ef2261-81da-4820-9b00-38aa1cf681aa",
                        "name": "Зелень",
                        "group_id": "79433e0a-59d2-49db-89aa-c70f19c6d027",
                        "type": "multicolor",
                        "value": {
                          "h": 108,
                          "s": 100,
                          "v": 100
                        }
                      }
                    ],
                    "scenes": [
                      {
                        "id": "sunrise",
                        "name": "Рассвет"
                      },
                      {
                        "id": "sunset",
                        "name": "Закат"
                      },
                      {
                        "id": "circadian",
                        "name": "Циркадный"
                      },
                      {
                        "id": "party",
                        "name": "Вечеринка"
                      },
                      {
                        "id": "snake",
                        "name": "Год змеи"
                      },
                      {
                        "id": "gaming",
                        "name": "Игра"
                      },
                      {
                        "id": "night",
                        "name": "Вечерний"
                      },
                      {
                        "id": "christmas",
                        "name": "Рождество"
                      },
                      {
                        "id": "romance",
                        "name": "Романтика"
                      },
                      {
                        "id": "candle",
                        "name": "Свеча"
                      },
                      {
                        "id": "northern",
                        "name": "Северное сияние"
                      },
                      {
                        "id": "fairy",
                        "name": "Сказочные огни"
                      },
                      {
                        "id": "reading",
                        "name": "Чтение"
                      }
                    ],
                    "custom_scenes": null,
                    "custom_scenes_available": true,
                    "color_model": "hsv",
                    "temperature_k": {
                      "min": 2700,
                      "max": 6500
                    }
                  }
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.range",
                  "state": {
                    "instance": "brightness",
                    "value": 100
                  },
                  "parameters": {
                    "instance": "brightness",
                    "name": "яркость",
                    "unit": "unit.percent",
                    "random_access": true,
                    "looped": false,
                    "range": {
                      "min": 1,
                      "max": 100,
                      "precision": 1
                    }
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740118154.003374,
                "changed": 1739745798.963376
              },
              "state": "online",
              "render_info": {
                "icon": {
                  "id": "yandex.light.unicorn",
                  "color": "white"
                }
              },
              "created": "2024-09-28T08:45:35Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00544",
                  "hw_version": "0",
                  "sw_version": "26",
                  "setup_code": "",
                  "serial_number": "HL00P4Q000K5RW"
                },
                "ota_update": {
                  "status": "downloading",
                  "version": 0
                }
              }
            },
            {
              "id": "ccaa7aeb-bc9e-4596-8b3a-bb54867baa03",
              "name": "Подсветка",
              "type": "devices.types.light",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "voltage",
                    "name": "текущее напряжение",
                    "unit": "unit.volt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 228
                  },
                  "state_changed_at": "2025-02-21T06:00:25Z",
                  "last_updated": "2025-02-21T06:00:25Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "power",
                    "name": "потребляемая мощность",
                    "unit": "unit.watt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-02-20T09:04:47Z",
                  "last_updated": "2025-02-20T09:04:47Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "amperage",
                    "name": "потребление тока",
                    "unit": "unit.ampere"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-02-20T09:04:47Z",
                  "last_updated": "2025-02-20T09:04:47Z"
                }
              ],
              "item_type": "device",
              "skill_id": "T",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117625.900207,
                "changed": 1738673796.858098
              },
              "state": "online",
              "render_info": {
                "icon": {
                  "id": "yandex.socket"
                }
              },
              "created": "2024-07-11T17:02:56Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-0007",
                  "hw_version": "1.0",
                  "sw_version": "1.0.4"
                }
              }
            },
            {
              "id": "c3397fcc-3802-4cb7-875d-04b5783b58f8",
              "name": "Посудомоечная машина",
              "type": "devices.types.dishwasher",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.dishwasher.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.mode",
                  "state": {
                    "instance": "dishwashing",
                    "value": "eco"
                  },
                  "parameters": {
                    "instance": "dishwashing",
                    "name": "мойка посуды",
                    "modes": [
                      {
                        "value": "eco",
                        "name": "Эко"
                      }
                    ]
                  }
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.toggle",
                  "state": {
                    "instance": "ionization",
                    "value": false
                  },
                  "parameters": {
                    "instance": "ionization",
                    "name": "ионизация"
                  }
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.toggle",
                  "state": {
                    "instance": "pause",
                    "value": false
                  },
                  "parameters": {
                    "instance": "pause",
                    "name": "пауза"
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "c191ed87-45b4-4f73-8cf3-eb6b9ec80c42",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119940.222176,
                "changed": 1736240163.772226
              },
              "state": "online",
              "created": "2024-07-08T17:48:04Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Midea"
                }
              }
            },
            {
              "id": "3ec71034-31de-4551-afe4-c7d5e5e334e6",
              "name": "Свет 1",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "updated": 1740084496.714989,
                "changed": 1738253647.455466
              },
              "state": "online",
              "created": "2024-08-08T13:25:24Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "06373972-8464-4920-a866-73448fedea8f",
              "name": "Свет 2",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "updated": 1739907906.472888,
                "changed": 1738253647.455466
              },
              "state": "online",
              "created": "2024-08-08T13:25:21Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "1f53416c-8b8e-4ca2-96f3-8abb7c8881f1",
              "name": "Свет кухня",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "updated": 1738964221.859982,
                "changed": 1723476594.075531
              },
              "state": "online",
              "created": "2024-08-08T13:25:22Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "40f3a181-4f6a-4041-b1cd-c38313198744",
              "name": "Умная кнопка",
              "type": "devices.types.sensor.button",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T05:57:17Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "button",
                    "name": "кнопка",
                    "events": [
                      {
                        "value": "click",
                        "name": "нажатие"
                      },
                      {
                        "value": "double_click",
                        "name": "двойное нажатие"
                      },
                      {
                        "value": "long_press",
                        "name": "долгое нажатие"
                      }
                    ]
                  },
                  "state": {
                    "instance": "button",
                    "status": "normal",
                    "value": "click"
                  },
                  "last_activated": "2025-02-20T02:46:15Z",
                  "state_changed_at": "2025-02-20T02:46:15Z",
                  "last_updated": "2025-02-20T09:04:44Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Кухня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117438.764009,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-09-05T10:53:00Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "",
                  "model": "lumi.remote.b1acn01",
                  "hw_version": "",
                  "sw_version": "2",
                  "setup_code": ""
                }
              }
            }
          ],
          "background_image": {
            "id": "kitchen"
          }
        },
        {
          "id": "497633a1-f384-43be-b02e-a67b185cfde8",
          "name": "Прихожая",
          "items": [
            {
              "id": "5933b6d7-16cc-48a8-882e-695c5727ecd5",
              "name": "видеозвонок",
              "type": "devices.types.camera",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.camera.svg/orig",
              "capabilities": [
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.video_stream",
                  "state": null,
                  "parameters": {
                    "protocols": [
                      "hls"
                    ]
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "b7af6522-9624-4e3f-814f-bfae36645395",
              "room_name": "Прихожая",
              "status_info": {
                "status": "online",
                "updated": 1738825720.09685,
                "changed": 1733246789.661504
              },
              "state": "online",
              "created": "2024-10-03T09:01:07Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Botslab",
                  "model": "R801",
                  "hw_version": "",
                  "sw_version": ""
                }
              }
            },
            {
              "id": "e47fb445-e7ed-4e1e-b57f-451cba093614",
              "name": "Датчик движения прихожая",
              "type": "devices.types.sensor.motion",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T05:05:39Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "illumination",
                    "name": "освещенность",
                    "unit": "unit.illumination.lux"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 2710
                  },
                  "state_changed_at": "2025-02-21T06:29:56Z",
                  "last_updated": "2025-02-21T06:29:56Z"
                },
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "motion",
                    "name": "движение",
                    "events": [
                      {
                        "value": "detected",
                        "name": "движение",
                        "can_be_deferred": true
                      },
                      {
                        "value": "not_detected_within_1m",
                        "name": "нет движения последнюю минуту"
                      },
                      {
                        "value": "not_detected_within_2m",
                        "name": "нет движения последние 2 минуты"
                      },
                      {
                        "value": "not_detected_within_5m",
                        "name": "нет движения последние 5 минут"
                      },
                      {
                        "value": "not_detected_within_10m",
                        "name": "нет движения последние 10 минут"
                      }
                    ]
                  },
                  "state": {
                    "instance": "motion",
                    "status": "normal",
                    "value": "detected"
                  },
                  "last_activated": "2025-02-21T06:29:41Z",
                  "last_updated": "2025-02-21T06:29:41Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Прихожая",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119397.879266,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-08-23T19:53:42Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ttcovulf",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "144",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "ab2cdb7c-0af5-4dd2-9e8a-0999f45dbf26",
              "name": "Датчик климата",
              "type": "devices.types.sensor.climate",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T05:55:24Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "humidity",
                    "name": "влажность",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 29,
                    "status": "warning",
                    "value": 29
                  },
                  "state_changed_at": "2025-02-21T06:30:48Z",
                  "last_updated": "2025-02-21T06:30:48Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 26.8
                  },
                  "state_changed_at": "2025-02-21T06:30:48Z",
                  "last_updated": "2025-02-21T06:30:48Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Прихожая",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119449.255687,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-09-29T08:33:09Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ysm4dsb1",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "131",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "2d330ad6-b76c-4bfb-82ba-a507c5750048",
              "name": "Свет гардероб прихожая",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Прихожая",
              "status_info": {
                "status": "online",
                "updated": 1738825720.755574,
                "changed": 1723476594.075531
              },
              "state": "online",
              "created": "2024-08-08T13:25:21Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "75cb6fc4-3fd9-4c60-a2ef-ba32cf97961f",
              "name": "Свет прихожая",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Прихожая",
              "status_info": {
                "status": "online",
                "updated": 1740119683.198084,
                "changed": 1738474799.703483
              },
              "state": "online",
              "created": "2024-08-08T13:25:24Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "64f7c874-fada-446c-8cc3-83848e6d54ff",
              "name": "Теплый пол",
              "type": "devices.types.thermostat",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.range",
                  "state": {
                    "instance": "temperature",
                    "value": 30
                  },
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius",
                    "random_access": true,
                    "looped": false,
                    "range": {
                      "min": 5,
                      "max": 45,
                      "precision": 0.5
                    }
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 24.5
                  },
                  "state_changed_at": "2025-02-06T07:08:39Z",
                  "last_updated": "2025-02-06T07:08:39Z"
                }
              ],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Прихожая",
              "status_info": {
                "status": "no_data",
                "updated": 1738912206.403377,
                "changed": 1738825719.7466924
              },
              "state": "no_data",
              "created": "2024-08-08T13:25:25Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "009 采暖",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            }
          ],
          "background_image": {
            "id": "hallway"
          }
        },
        {
          "id": "2673b7fb-06ba-4821-a11f-eac45b69723d",
          "name": "Спальня",
          "items": [
            {
              "id": "39ea7752-3fe3-4e81-8782-8252967683f2",
              "name": "Выключатель спальня",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "updated": 1738825720.755574,
                "changed": 1723476594.075531
              },
              "state": "online",
              "created": "2024-08-08T13:25:24Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
              "name": "Выключатель Яндекса",
              "type": "multidevices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "last_updated": "2025-02-21T04:09:19Z"
                }
              ],
              "item_type": "multidevice",
              "multidevice": {
                "type": "switch_2_parts_wireless",
                "layout": {
                  "left_bottom": "34899820-6a88-4b8f-92e2-68fc81cc724b",
                  "left_top": "fe95451e-1d36-474c-ada0-2838062eefd3",
                  "right_bottom": "577e85c3-8836-4bd3-865e-e560fba29caa",
                  "right_top": "2880c7fc-7ef3-46b5-aa44-d2ac104f5e25"
                }
              },
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740110960.927484,
                "changed": 1738328118.802211
              },
              "state": "online",
              "render_info": {
                "icon": {
                  "id": "yandex.switch.wireless.2_parts"
                }
              },
              "parameters": {
                "ota_update": {
                  "status": "new",
                  "version": 17
                }
              }
            },
            {
              "id": "f5e10267-5972-48fb-a358-c2db74c40df3",
              "name": "Датчик климата спальня",
              "type": "devices.types.sensor.climate",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "battery_level",
                    "name": "уровень заряда",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 100,
                    "status": "normal",
                    "value": 100
                  },
                  "trend": {
                    "status": "normal"
                  },
                  "last_updated": "2025-02-21T04:40:13Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "humidity",
                    "name": "влажность",
                    "unit": "unit.percent"
                  },
                  "state": {
                    "percent": 36,
                    "status": "warning",
                    "value": 36
                  },
                  "state_changed_at": "2025-02-21T06:25:08Z",
                  "last_updated": "2025-02-21T06:25:08Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 23.3
                  },
                  "state_changed_at": "2025-02-21T06:25:08Z",
                  "last_updated": "2025-02-21T06:25:08Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119109.583945,
                "changed": 1738253631.413103
              },
              "state": "online",
              "created": "2024-06-19T13:00:22Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "_TZE200_ysm4dsb1",
                  "model": "TS0601",
                  "hw_version": "1",
                  "sw_version": "131",
                  "setup_code": ""
                }
              }
            },
            {
              "id": "cfd39f30-7586-4452-b339-312fb05107d4",
              "name": "Лампа",
              "type": "devices.types.socket",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "voltage",
                    "name": "текущее напряжение",
                    "unit": "unit.volt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 229
                  },
                  "state_changed_at": "2025-02-21T06:24:26Z",
                  "last_updated": "2025-02-21T06:24:26Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "power",
                    "name": "потребляемая мощность",
                    "unit": "unit.watt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-02-17T17:16:52Z",
                  "last_updated": "2025-02-17T17:16:52Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "amperage",
                    "name": "потребление тока",
                    "unit": "unit.ampere"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2025-02-17T17:16:52Z",
                  "last_updated": "2025-02-17T17:16:52Z"
                }
              ],
              "item_type": "device",
              "skill_id": "T",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740119067.118978,
                "changed": 1739997585.737714
              },
              "state": "online",
              "render_info": {
                "icon": {
                  "id": "yandex.socket"
                }
              },
              "created": "2024-08-13T15:34:17Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-0007",
                  "hw_version": "1.0",
                  "sw_version": "1.0.4"
                }
              }
            },
            {
              "id": "fe95451e-1d36-474c-ada0-2838062eefd3",
              "name": "Левая верхняя кнопка",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "button",
                    "name": "кнопка",
                    "events": [
                      {
                        "value": "click",
                        "name": "нажатие"
                      },
                      {
                        "value": "double_click",
                        "name": "двойное нажатие"
                      },
                      {
                        "value": "long_press",
                        "name": "долгое нажатие"
                      }
                    ]
                  },
                  "state": {
                    "instance": "button",
                    "status": "normal",
                    "value": "click"
                  },
                  "last_updated": "2025-02-17T04:19:34Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740110960.666249,
                "changed": 1738328118.802211
              },
              "state": "online",
              "created": "2025-01-31T12:53:27Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00535",
                  "hw_version": "0",
                  "sw_version": "16",
                  "setup_code": "",
                  "serial_number": "HS501M2000A3RW"
                }
              }
            },
            {
              "id": "34899820-6a88-4b8f-92e2-68fc81cc724b",
              "name": "Левая нижняя кнопка",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "button",
                    "name": "кнопка",
                    "events": [
                      {
                        "value": "click",
                        "name": "нажатие"
                      },
                      {
                        "value": "double_click",
                        "name": "двойное нажатие"
                      },
                      {
                        "value": "long_press",
                        "name": "долгое нажатие"
                      }
                    ]
                  },
                  "state": {
                    "instance": "button",
                    "status": "normal",
                    "value": "click"
                  },
                  "last_activated": "2025-02-18T17:48:15Z",
                  "last_updated": "2025-02-18T17:48:15Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740110960.159682,
                "changed": 1738328008.872791
              },
              "state": "online",
              "created": "2025-01-31T12:53:26Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00535",
                  "hw_version": "0",
                  "sw_version": "16",
                  "setup_code": "",
                  "serial_number": "HS501M2000A3RW"
                },
                "ota_update": {
                  "status": "new",
                  "version": 17
                }
              }
            },
            {
              "id": "2880c7fc-7ef3-46b5-aa44-d2ac104f5e25",
              "name": "Правая верхняя кнопка",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "button",
                    "name": "кнопка",
                    "events": [
                      {
                        "value": "click",
                        "name": "нажатие"
                      },
                      {
                        "value": "double_click",
                        "name": "двойное нажатие"
                      },
                      {
                        "value": "long_press",
                        "name": "долгое нажатие"
                      }
                    ]
                  },
                  "state": {
                    "instance": "button",
                    "status": "normal",
                    "value": "click"
                  },
                  "last_activated": "2025-02-20T06:52:38Z",
                  "last_updated": "2025-02-20T06:52:38Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740110960.927484,
                "changed": 1738328044.286817
              },
              "state": "online",
              "created": "2025-01-31T12:53:27Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00535",
                  "hw_version": "0",
                  "sw_version": "16",
                  "setup_code": "",
                  "serial_number": "HS501M2000A3RW"
                }
              }
            },
            {
              "id": "577e85c3-8836-4bd3-865e-e560fba29caa",
              "name": "Правая нижняя кнопка",
              "type": "devices.types.switch",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
              "capabilities": [],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "button",
                    "name": "кнопка",
                    "events": [
                      {
                        "value": "click",
                        "name": "нажатие"
                      },
                      {
                        "value": "double_click",
                        "name": "двойное нажатие"
                      },
                      {
                        "value": "long_press",
                        "name": "долгое нажатие"
                      }
                    ]
                  },
                  "state": {
                    "instance": "button",
                    "status": "normal",
                    "value": "click"
                  },
                  "last_activated": "2025-02-20T07:30:03Z",
                  "last_updated": "2025-02-20T07:30:03Z"
                }
              ],
              "item_type": "device",
              "skill_id": "YANDEX_IO",
              "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740110960.359584,
                "changed": 1738328036.711349
              },
              "state": "online",
              "created": "2025-01-31T12:53:26Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-00535",
                  "hw_version": "0",
                  "sw_version": "16",
                  "setup_code": "",
                  "serial_number": "HS501M2000A3RW"
                }
              }
            },
            {
              "id": "18918a7c-3633-4bb4-aeb2-26104b68e38e",
              "name": "Радиатор",
              "type": "devices.types.thermostat",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": true
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                },
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.range",
                  "state": {
                    "instance": "temperature",
                    "value": 30
                  },
                  "parameters": {
                    "instance": "temperature",
                    "name": "температура",
                    "unit": "unit.temperature.celsius",
                    "random_access": true,
                    "looped": false,
                    "range": {
                      "min": 5,
                      "max": 35,
                      "precision": 1
                    }
                  }
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "updated": 1739971671.635869,
                "changed": 1733905127.969598
              },
              "state": "online",
              "created": "2024-10-03T08:33:28Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "ME167",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "e2aa81c1-1bdb-454b-8881-82c17289d472",
              "name": "Свет спальня 1",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "updated": 1740084338.330975,
                "changed": 1723220145.990545
              },
              "state": "online",
              "created": "2024-08-08T13:25:23Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "1da20807-9966-4c1b-ae47-8665c5c989d3",
              "name": "Свет спальня 2",
              "type": "devices.types.light.ceiling",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [],
              "item_type": "device",
              "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "updated": 1740084338.330975,
                "changed": 1729182526.875941
              },
              "state": "online",
              "created": "2024-08-08T13:25:23Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "TUYA INC.",
                  "model": "二路开关 CB3S",
                  "hw_version": "1.0",
                  "sw_version": "1.0"
                }
              }
            },
            {
              "id": "f6e82d01-207b-4224-8ff1-12397f3cbf1a",
              "name": "Увлажнитель",
              "type": "devices.types.socket",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
              "capabilities": [
                {
                  "reportable": true,
                  "retrievable": true,
                  "type": "devices.capabilities.on_off",
                  "state": {
                    "instance": "on",
                    "value": false
                  },
                  "parameters": {
                    "split": false
                  },
                  "can_be_deferred": true
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "voltage",
                    "name": "текущее напряжение",
                    "unit": "unit.volt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 229
                  },
                  "state_changed_at": "2025-02-21T05:55:46Z",
                  "last_updated": "2025-02-21T05:55:46Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "power",
                    "name": "потребляемая мощность",
                    "unit": "unit.watt"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2024-12-09T05:02:38Z",
                  "last_updated": "2025-02-06T07:08:38Z"
                },
                {
                  "type": "devices.properties.float",
                  "retrievable": true,
                  "reportable": true,
                  "parameters": {
                    "instance": "amperage",
                    "name": "потребление тока",
                    "unit": "unit.ampere"
                  },
                  "state": {
                    "percent": null,
                    "status": null,
                    "value": 0
                  },
                  "state_changed_at": "2024-12-09T05:02:38Z",
                  "last_updated": "2025-02-06T07:08:38Z"
                }
              ],
              "item_type": "device",
              "skill_id": "T",
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117346.854682,
                "changed": 1739860240.044064
              },
              "state": "online",
              "render_info": {
                "icon": {
                  "id": "yandex.socket"
                }
              },
              "created": "2024-08-13T15:34:18Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex",
                  "model": "YNDX-0007",
                  "hw_version": "1.0",
                  "sw_version": "1.0.4"
                }
              }
            },
            {
              "id": "4191e309-c8c9-4e19-9655-26a4bfdd37ec",
              "name": "Яндекс Станция 2",
              "type": "devices.types.smart_speaker.yandex.station.midi",
              "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station.midi.png/orig",
              "capabilities": [
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.color_setting",
                  "state": {
                    "instance": "scene",
                    "value": {
                      "id": "lava_lamp",
                      "name": "Лава лампа"
                    }
                  },
                  "parameters": {
                    "instance": "color",
                    "name": "цвет",
                    "palette": [],
                    "custom_palette": null,
                    "scenes": [
                      {
                        "id": "lava_lamp",
                        "name": "Лава лампа"
                      },
                      {
                        "id": "inactive",
                        "name": "Неактивный"
                      },
                      {
                        "id": "night",
                        "name": "Ночь"
                      },
                      {
                        "id": "candle",
                        "name": "Свеча"
                      }
                    ],
                    "custom_scenes": null,
                    "custom_scenes_available": false
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "text_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar.server_action",
                  "state": null,
                  "parameters": {
                    "instance": "phrase_action"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "weather",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "weather"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "volume",
                    "value": {
                      "value": 3
                    }
                  },
                  "parameters": {
                    "instance": "volume"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "music_play",
                    "value": {
                      "play_in_background": true
                    }
                  },
                  "parameters": {
                    "instance": "music_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "news",
                    "value": {
                      "topic": "index",
                      "play_in_background": true,
                      "topic_name": "Главное"
                    }
                  },
                  "parameters": {
                    "instance": "news"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "sound_play",
                    "value": {
                      "sound": "chainsaw-1",
                      "sound_name": "Бензопила"
                    }
                  },
                  "parameters": {
                    "instance": "sound_play"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "stop_everything",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "stop_everything"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "tts",
                    "value": {
                      "text": "",
                      "whisper": false,
                      "lang": ""
                    }
                  },
                  "parameters": {
                    "instance": "tts"
                  }
                },
                {
                  "reportable": false,
                  "retrievable": false,
                  "type": "devices.capabilities.quasar",
                  "state": {
                    "instance": "alice_show",
                    "value": {}
                  },
                  "parameters": {
                    "instance": "alice_show"
                  }
                }
              ],
              "properties": [
                {
                  "type": "devices.properties.event",
                  "retrievable": false,
                  "reportable": true,
                  "parameters": {
                    "instance": "voice_activity",
                    "name": "активация по голосу",
                    "events": [
                      {
                        "value": "speech_finished",
                        "name": "заговорили рядом",
                        "can_be_deferred": true
                      },
                      {
                        "value": "no_speech_within_5m",
                        "name": "не слышит голос 5 минут"
                      },
                      {
                        "value": "no_speech_within_10m",
                        "name": "не слышит голос 10 минут"
                      },
                      {
                        "value": "no_speech_within_30m",
                        "name": "не слышит голос 30 минут"
                      },
                      {
                        "value": "speech_finished_multiple",
                        "name": "заговорили рядом"
                      }
                    ]
                  },
                  "state": null,
                  "last_updated": "2024-10-22T09:34:08Z"
                }
              ],
              "item_type": "device",
              "skill_id": "Q",
              "quasar_info": {
                "device_id": "U00EG2300D88JK",
                "platform": "yandexmidi",
                "color": "black",
                "multiroom_available": true,
                "multistep_scenarios_available": true,
                "device_discovery_methods": [
                  "zigbee",
                  "matter"
                ],
                "device_setup_methods": [
                  "ble"
                ]
              },
              "room_name": "Спальня",
              "status_info": {
                "status": "online",
                "reportable": true,
                "updated": 1740117706.639967,
                "changed": 1738253631.318969
              },
              "state": "online",
              "created": "2022-12-18T12:24:47Z",
              "parameters": {
                "device_info": {
                  "manufacturer": "Yandex Services AG",
                  "model": "YNDX-00051"
                }
              }
            }
          ],
          "background_image": {
            "id": "bedroom"
          }
        }
      ],
      "all": [
        {
          "id": "5933b6d7-16cc-48a8-882e-695c5727ecd5",
          "name": "видеозвонок",
          "type": "devices.types.camera",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.camera.svg/orig",
          "capabilities": [
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.video_stream",
              "state": null,
              "parameters": {
                "protocols": [
                  "hls"
                ]
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "b7af6522-9624-4e3f-814f-bfae36645395",
          "room_name": "Прихожая",
          "status_info": {
            "status": "online",
            "updated": 1738825720.09685,
            "changed": 1733246789.661504
          },
          "state": "online",
          "created": "2024-10-03T09:01:07Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Botslab",
              "model": "R801",
              "hw_version": "",
              "sw_version": ""
            }
          }
        },
        {
          "id": "39ea7752-3fe3-4e81-8782-8252967683f2",
          "name": "Выключатель спальня",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "updated": 1738825720.755574,
            "changed": 1723476594.075531
          },
          "state": "online",
          "created": "2024-08-08T13:25:24Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
          "name": "Выключатель Яндекса",
          "type": "multidevices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "last_updated": "2025-02-21T04:09:19Z"
            }
          ],
          "item_type": "multidevice",
          "multidevice": {
            "type": "switch_2_parts_wireless",
            "layout": {
              "left_bottom": "34899820-6a88-4b8f-92e2-68fc81cc724b",
              "left_top": "fe95451e-1d36-474c-ada0-2838062eefd3",
              "right_bottom": "577e85c3-8836-4bd3-865e-e560fba29caa",
              "right_top": "2880c7fc-7ef3-46b5-aa44-d2ac104f5e25"
            }
          },
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740110960.927484,
            "changed": 1738328118.802211
          },
          "state": "online",
          "render_info": {
            "icon": {
              "id": "yandex.switch.wireless.2_parts"
            }
          },
          "parameters": {
            "ota_update": {
              "status": "new",
              "version": 17
            }
          }
        },
        {
          "id": "00ea1a68-9342-4f10-b254-bbd209a753c7",
          "name": "Гирлянда",
          "type": "devices.types.light.garland",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "power",
                "name": "потребляемая мощность",
                "unit": "unit.watt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-01-27T12:25:05Z",
              "last_updated": "2025-01-27T12:25:05Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "voltage",
                "name": "текущее напряжение",
                "unit": "unit.volt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 234
              },
              "state_changed_at": "2025-01-27T12:43:58Z",
              "last_updated": "2025-01-27T12:43:58Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "amperage",
                "name": "потребление тока",
                "unit": "unit.ampere"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-01-27T12:42:18Z",
              "last_updated": "2025-01-27T12:42:18Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Гостиная",
          "status_info": {
            "status": "no_data",
            "updated": 1740119785.894254,
            "changed": 1737981838.4594262
          },
          "state": "no_data",
          "render_info": {
            "icon": {
              "id": "yandex.socket.phoenix",
              "color": "black"
            }
          },
          "created": "2024-12-30T11:37:08Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00540",
              "hw_version": "0",
              "sw_version": "18",
              "setup_code": "04611731516",
              "serial_number": "HP00NR3000B6RK"
            }
          }
        },
        {
          "id": "9bc6bf24-67ea-4815-895d-05cc3df839bf",
          "name": "Гирлянда",
          "type": "devices.types.light.garland",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.mode",
              "state": {
                "instance": "thermostat",
                "value": "cool"
              },
              "parameters": {
                "instance": "thermostat",
                "name": "термостат",
                "modes": [
                  {
                    "value": "cool",
                    "name": "Охлаждение"
                  },
                  {
                    "value": "heat",
                    "name": "Нагрев"
                  },
                  {
                    "value": "fan_only",
                    "name": "Вентиляция"
                  },
                  {
                    "value": "dry",
                    "name": "Осушение"
                  },
                  {
                    "value": "auto",
                    "name": "Авто"
                  },
                  {
                    "value": "preheat",
                    "name": "Подогрев"
                  }
                ]
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1740119786.206,
            "changed": 1738612793.865252
          },
          "state": "online",
          "created": "2024-12-30T11:28:39Z",
          "parameters": {
            "device_info": {
              "manufacturer": "SMART LIFE",
              "model": "SP112_RTL",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "76fb7334-6d56-4721-ad96-6103530047ee",
          "name": "Датчик движений",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T05:57:33Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "illumination",
                "name": "освещенность",
                "unit": "unit.illumination.lux"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 1
              },
              "state_changed_at": "2025-02-20T19:26:16Z",
              "last_updated": "2025-02-20T19:26:16Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-20T10:26:32Z",
              "last_updated": "2025-02-20T10:26:32Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Гардероб",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117454.041246,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-07-31T10:53:54Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ttcovulf",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "a8116ba1-1847-4442-8c90-0de25f456b3a",
          "name": "Датчик движения",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T03:09:00Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-21T06:38:59Z",
              "last_updated": "2025-02-21T06:38:59Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740120001.530951,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-07-19T11:11:12Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYATEC-h542kfah",
              "model": "RH3040",
              "hw_version": "1",
              "sw_version": "66",
              "setup_code": ""
            }
          }
        },
        {
          "id": "ed6418d2-bdf1-4600-af24-e8d446daedb3",
          "name": "Датчик движения ванная",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T04:06:02Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "illumination",
                "name": "освещенность",
                "unit": "unit.illumination.lux"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 1
              },
              "state_changed_at": "2025-02-21T06:29:47Z",
              "last_updated": "2025-02-21T06:29:47Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-21T06:29:32Z",
              "last_updated": "2025-02-21T06:29:32Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119388.53484,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-08-05T14:14:33Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ttcovulf",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "ebf2f3b3-d8c5-4237-825b-7aa592a56e78",
          "name": "Датчик движения кухня",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T03:35:54Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "illumination",
                "name": "освещенность",
                "unit": "unit.illumination.lux"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 2226
              },
              "state_changed_at": "2025-02-21T06:40:06Z",
              "last_updated": "2025-02-21T06:40:06Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-21T06:40:05Z",
              "last_updated": "2025-02-21T06:40:05Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740120007.396564,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-08-23T19:49:00Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ttcovulf",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "e47fb445-e7ed-4e1e-b57f-451cba093614",
          "name": "Датчик движения прихожая",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T05:05:39Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "illumination",
                "name": "освещенность",
                "unit": "unit.illumination.lux"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 2710
              },
              "state_changed_at": "2025-02-21T06:29:56Z",
              "last_updated": "2025-02-21T06:29:56Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-21T06:29:41Z",
              "last_updated": "2025-02-21T06:29:41Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Прихожая",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119397.879266,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-08-23T19:53:42Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ttcovulf",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "dc478c79-950f-471e-8c0e-4c951f0c77d6",
          "name": "Датчик движения туалет",
          "type": "devices.types.sensor.motion",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T03:40:18Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "illumination",
                "name": "освещенность",
                "unit": "unit.illumination.lux"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 1
              },
              "state_changed_at": "2025-02-21T06:29:52Z",
              "last_updated": "2025-02-21T06:29:52Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "motion",
                "name": "движение",
                "events": [
                  {
                    "value": "detected",
                    "name": "движение",
                    "can_be_deferred": true
                  },
                  {
                    "value": "not_detected_within_1m",
                    "name": "нет движения последнюю минуту"
                  },
                  {
                    "value": "not_detected_within_2m",
                    "name": "нет движения последние 2 минуты"
                  },
                  {
                    "value": "not_detected_within_5m",
                    "name": "нет движения последние 5 минут"
                  },
                  {
                    "value": "not_detected_within_10m",
                    "name": "нет движения последние 10 минут"
                  }
                ]
              },
              "state": {
                "instance": "motion",
                "status": "normal",
                "value": "detected"
              },
              "last_activated": "2025-02-21T06:29:32Z",
              "last_updated": "2025-02-21T06:29:32Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119394.014771,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-08-23T19:50:35Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ttcovulf",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "ab2cdb7c-0af5-4dd2-9e8a-0999f45dbf26",
          "name": "Датчик климата",
          "type": "devices.types.sensor.climate",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T05:55:24Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "humidity",
                "name": "влажность",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 29,
                "status": "warning",
                "value": 29
              },
              "state_changed_at": "2025-02-21T06:30:48Z",
              "last_updated": "2025-02-21T06:30:48Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 26.8
              },
              "state_changed_at": "2025-02-21T06:30:48Z",
              "last_updated": "2025-02-21T06:30:48Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Прихожая",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119449.255687,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-09-29T08:33:09Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ysm4dsb1",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "131",
              "setup_code": ""
            }
          }
        },
        {
          "id": "eb1aac9f-4f5e-481a-acd3-731a8b3d489c",
          "name": "Датчик климата",
          "type": "devices.types.sensor.climate",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T03:21:02Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "humidity",
                "name": "влажность",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 31,
                "status": "warning",
                "value": 31
              },
              "state_changed_at": "2025-02-21T05:58:02Z",
              "last_updated": "2025-02-21T05:58:02Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 27
              },
              "state_changed_at": "2025-02-20T23:56:50Z",
              "last_updated": "2025-02-21T05:58:02Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117483.97409,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-09-29T08:30:09Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ysm4dsb1",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "131",
              "setup_code": ""
            }
          }
        },
        {
          "id": "35e3f2df-4372-452b-a61a-c6bf4f5cf4a2",
          "name": "Датчик климата балкон",
          "type": "devices.types.sensor.climate",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 84,
                "status": "normal",
                "value": 84
              },
              "trend": {
                "status": "normal"
              },
              "state_changed_at": "2025-02-21T05:49:39Z",
              "last_updated": "2025-02-21T05:49:39Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": -6.9
              },
              "state_changed_at": "2025-02-21T06:13:08Z",
              "last_updated": "2025-02-21T06:13:08Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "pressure",
                "name": "давление",
                "unit": "unit.pressure.mmhg"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 762
              },
              "state_changed_at": "2025-02-21T05:50:10Z",
              "last_updated": "2025-02-21T06:13:08Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "humidity",
                "name": "влажность",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 71,
                "status": "danger",
                "value": 71
              },
              "state_changed_at": "2025-02-21T06:13:08Z",
              "last_updated": "2025-02-21T06:13:08Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Балкон",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740118389.152718,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-07-04T18:11:28Z",
          "parameters": {
            "device_info": {
              "manufacturer": "",
              "model": "lumi.weather",
              "hw_version": "",
              "sw_version": "5",
              "setup_code": ""
            }
          }
        },
        {
          "id": "8bcfb58a-13b8-4e9b-a7a0-5199f2c28b8f",
          "name": "Датчик климата гостиная",
          "type": "devices.types.sensor.climate",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T06:22:50Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "humidity",
                "name": "влажность",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 36,
                "status": "warning",
                "value": 36
              },
              "state_changed_at": "2025-02-21T06:33:32Z",
              "last_updated": "2025-02-21T06:33:32Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 25.1
              },
              "state_changed_at": "2025-02-21T06:33:32Z",
              "last_updated": "2025-02-21T06:33:32Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119614.108565,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-06-19T12:56:23Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ysm4dsb1",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "144",
              "setup_code": ""
            }
          }
        },
        {
          "id": "f5e10267-5972-48fb-a358-c2db74c40df3",
          "name": "Датчик климата спальня",
          "type": "devices.types.sensor.climate",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T04:40:13Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "humidity",
                "name": "влажность",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 36,
                "status": "warning",
                "value": 36
              },
              "state_changed_at": "2025-02-21T06:25:08Z",
              "last_updated": "2025-02-21T06:25:08Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 23.3
              },
              "state_changed_at": "2025-02-21T06:25:08Z",
              "last_updated": "2025-02-21T06:25:08Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119109.583945,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-06-19T13:00:22Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZE200_ysm4dsb1",
              "model": "TS0601",
              "hw_version": "1",
              "sw_version": "131",
              "setup_code": ""
            }
          }
        },
        {
          "id": "27dd3e50-db3a-4d8d-a3aa-038edc1df56e",
          "name": "Датчик протечки воды",
          "type": "devices.types.sensor.water_leak",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T06:06:25Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "water_leak",
                "name": "протечка воды",
                "events": [
                  {
                    "value": "leak",
                    "name": "протечка"
                  },
                  {
                    "value": "dry",
                    "name": "нет протечки"
                  }
                ]
              },
              "state": {
                "instance": "water_leak",
                "status": "normal",
                "value": "dry"
              },
              "last_updated": "2025-02-12T05:47:07Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117985.980594,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-08-06T18:16:03Z",
          "parameters": {
            "device_info": {
              "manufacturer": "_TZ3000_k4ej3ww2",
              "model": "TS0207",
              "hw_version": "1",
              "sw_version": "65",
              "setup_code": ""
            }
          }
        },
        {
          "id": "95a0b119-85e0-40ec-837b-b771fa566904",
          "name": "Зарядка планшет",
          "type": "devices.types.socket",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.mode",
              "state": {
                "instance": "thermostat",
                "value": "cool"
              },
              "parameters": {
                "instance": "thermostat",
                "name": "термостат",
                "modes": [
                  {
                    "value": "cool",
                    "name": "Охлаждение"
                  },
                  {
                    "value": "heat",
                    "name": "Нагрев"
                  },
                  {
                    "value": "fan_only",
                    "name": "Вентиляция"
                  },
                  {
                    "value": "dry",
                    "name": "Осушение"
                  },
                  {
                    "value": "auto",
                    "name": "Авто"
                  },
                  {
                    "value": "preheat",
                    "name": "Подогрев"
                  }
                ]
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1738825720.755574,
            "changed": 1738750505.845319
          },
          "state": "online",
          "created": "2024-12-30T11:28:39Z",
          "parameters": {
            "device_info": {
              "manufacturer": "SMART LIFE",
              "model": "SP112_RTL",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "cfd39f30-7586-4452-b339-312fb05107d4",
          "name": "Лампа",
          "type": "devices.types.socket",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "voltage",
                "name": "текущее напряжение",
                "unit": "unit.volt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 229
              },
              "state_changed_at": "2025-02-21T06:24:26Z",
              "last_updated": "2025-02-21T06:24:26Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "power",
                "name": "потребляемая мощность",
                "unit": "unit.watt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-02-17T17:16:52Z",
              "last_updated": "2025-02-17T17:16:52Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "amperage",
                "name": "потребление тока",
                "unit": "unit.ampere"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-02-17T17:16:52Z",
              "last_updated": "2025-02-17T17:16:52Z"
            }
          ],
          "item_type": "device",
          "skill_id": "T",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119067.118978,
            "changed": 1739997585.737714
          },
          "state": "online",
          "render_info": {
            "icon": {
              "id": "yandex.socket"
            }
          },
          "created": "2024-08-13T15:34:17Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-0007",
              "hw_version": "1.0",
              "sw_version": "1.0.4"
            }
          }
        },
        {
          "id": "fe95451e-1d36-474c-ada0-2838062eefd3",
          "name": "Левая верхняя кнопка",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "button",
                "name": "кнопка",
                "events": [
                  {
                    "value": "click",
                    "name": "нажатие"
                  },
                  {
                    "value": "double_click",
                    "name": "двойное нажатие"
                  },
                  {
                    "value": "long_press",
                    "name": "долгое нажатие"
                  }
                ]
              },
              "state": {
                "instance": "button",
                "status": "normal",
                "value": "click"
              },
              "last_updated": "2025-02-17T04:19:34Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740110960.666249,
            "changed": 1738328118.802211
          },
          "state": "online",
          "created": "2025-01-31T12:53:27Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00535",
              "hw_version": "0",
              "sw_version": "16",
              "setup_code": "",
              "serial_number": "HS501M2000A3RW"
            }
          }
        },
        {
          "id": "34899820-6a88-4b8f-92e2-68fc81cc724b",
          "name": "Левая нижняя кнопка",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "button",
                "name": "кнопка",
                "events": [
                  {
                    "value": "click",
                    "name": "нажатие"
                  },
                  {
                    "value": "double_click",
                    "name": "двойное нажатие"
                  },
                  {
                    "value": "long_press",
                    "name": "долгое нажатие"
                  }
                ]
              },
              "state": {
                "instance": "button",
                "status": "normal",
                "value": "click"
              },
              "last_activated": "2025-02-18T17:48:15Z",
              "last_updated": "2025-02-18T17:48:15Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740110960.159682,
            "changed": 1738328008.872791
          },
          "state": "online",
          "created": "2025-01-31T12:53:26Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00535",
              "hw_version": "0",
              "sw_version": "16",
              "setup_code": "",
              "serial_number": "HS501M2000A3RW"
            },
            "ota_update": {
              "status": "new",
              "version": 17
            }
          }
        },
        {
          "id": "9f9070ba-b7b4-4d44-978d-69936a9bbd54",
          "name": "Переключатель 1",
          "type": "devices.types.socket",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.mode",
              "state": {
                "instance": "thermostat",
                "value": "cool"
              },
              "parameters": {
                "instance": "thermostat",
                "name": "термостат",
                "modes": [
                  {
                    "value": "cool",
                    "name": "Охлаждение"
                  },
                  {
                    "value": "heat",
                    "name": "Нагрев"
                  },
                  {
                    "value": "fan_only",
                    "name": "Вентиляция"
                  },
                  {
                    "value": "dry",
                    "name": "Осушение"
                  },
                  {
                    "value": "auto",
                    "name": "Авто"
                  },
                  {
                    "value": "preheat",
                    "name": "Подогрев"
                  }
                ]
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1738825720.755574,
            "changed": 1738750505.845319
          },
          "state": "online",
          "created": "2024-12-30T11:28:39Z",
          "parameters": {
            "device_info": {
              "manufacturer": "SMART LIFE",
              "model": "SP112_RTL",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "2c91df43-74c6-43f5-a4e6-101bb6c6b22e",
          "name": "Подсветка",
          "type": "devices.types.light.strip",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.strip.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.color_setting",
              "state": {
                "instance": "color",
                "value": {
                  "id": "",
                  "name": "",
                  "type": "multicolor",
                  "value": {
                    "h": 229,
                    "s": 29,
                    "v": 100
                  }
                }
              },
              "parameters": {
                "instance": "color",
                "name": "цвет",
                "palette": [
                  {
                    "id": "soft_white",
                    "name": "Мягкий белый",
                    "type": "white",
                    "value": {
                      "h": 32,
                      "s": 67,
                      "v": 100
                    }
                  },
                  {
                    "id": "warm_white",
                    "name": "Теплый белый",
                    "type": "white",
                    "value": {
                      "h": 33,
                      "s": 49,
                      "v": 100
                    }
                  },
                  {
                    "id": "white",
                    "name": "Белый",
                    "type": "white",
                    "value": {
                      "h": 33,
                      "s": 28,
                      "v": 100
                    }
                  },
                  {
                    "id": "daylight",
                    "name": "Дневной белый",
                    "type": "white",
                    "value": {
                      "h": 36,
                      "s": 35,
                      "v": 97
                    }
                  },
                  {
                    "id": "cold_white",
                    "name": "Холодный белый",
                    "type": "white",
                    "value": {
                      "h": 222,
                      "s": 4,
                      "v": 98
                    }
                  },
                  {
                    "id": "red",
                    "name": "Красный",
                    "type": "multicolor",
                    "value": {
                      "h": 0,
                      "s": 65,
                      "v": 100
                    }
                  },
                  {
                    "id": "coral",
                    "name": "Коралловый",
                    "type": "multicolor",
                    "value": {
                      "h": 8,
                      "s": 55,
                      "v": 98
                    }
                  },
                  {
                    "id": "orange",
                    "name": "Оранжевый",
                    "type": "multicolor",
                    "value": {
                      "h": 25,
                      "s": 70,
                      "v": 100
                    }
                  },
                  {
                    "id": "yellow",
                    "name": "Желтый",
                    "type": "multicolor",
                    "value": {
                      "h": 40,
                      "s": 70,
                      "v": 100
                    }
                  },
                  {
                    "id": "lime",
                    "name": "Салатовый",
                    "type": "multicolor",
                    "value": {
                      "h": 73,
                      "s": 96,
                      "v": 100
                    }
                  },
                  {
                    "id": "green",
                    "name": "Зеленый",
                    "type": "multicolor",
                    "value": {
                      "h": 120,
                      "s": 55,
                      "v": 90
                    }
                  },
                  {
                    "id": "emerald",
                    "name": "Изумрудный",
                    "type": "multicolor",
                    "value": {
                      "h": 160,
                      "s": 80,
                      "v": 90
                    }
                  },
                  {
                    "id": "turquoise",
                    "name": "Бирюзовый",
                    "type": "multicolor",
                    "value": {
                      "h": 180,
                      "s": 80,
                      "v": 90
                    }
                  },
                  {
                    "id": "cyan",
                    "name": "Голубой",
                    "type": "multicolor",
                    "value": {
                      "h": 190,
                      "s": 60,
                      "v": 100
                    }
                  },
                  {
                    "id": "blue",
                    "name": "Синий",
                    "type": "multicolor",
                    "value": {
                      "h": 225,
                      "s": 55,
                      "v": 90
                    }
                  },
                  {
                    "id": "moonlight",
                    "name": "Лунный",
                    "type": "multicolor",
                    "value": {
                      "h": 231,
                      "s": 10,
                      "v": 100
                    }
                  },
                  {
                    "id": "lavender",
                    "name": "Сиреневый",
                    "type": "multicolor",
                    "value": {
                      "h": 255,
                      "s": 55,
                      "v": 90
                    }
                  },
                  {
                    "id": "violet",
                    "name": "Фиолетовый",
                    "type": "multicolor",
                    "value": {
                      "h": 270,
                      "s": 55,
                      "v": 90
                    }
                  },
                  {
                    "id": "purple",
                    "name": "Пурпурный",
                    "type": "multicolor",
                    "value": {
                      "h": 300,
                      "s": 70,
                      "v": 90
                    }
                  },
                  {
                    "id": "orchid",
                    "name": "Розовый",
                    "type": "multicolor",
                    "value": {
                      "h": 305,
                      "s": 50,
                      "v": 90
                    }
                  },
                  {
                    "id": "raspberry",
                    "name": "Малиновый",
                    "type": "multicolor",
                    "value": {
                      "h": 345,
                      "s": 70,
                      "v": 90
                    }
                  },
                  {
                    "id": "mauve",
                    "name": "Лиловый",
                    "type": "multicolor",
                    "value": {
                      "h": 340,
                      "s": 45,
                      "v": 90
                    }
                  }
                ],
                "custom_palette": [
                  {
                    "id": "74ef2261-81da-4820-9b00-38aa1cf681aa",
                    "name": "Зелень",
                    "group_id": "79433e0a-59d2-49db-89aa-c70f19c6d027",
                    "type": "multicolor",
                    "value": {
                      "h": 108,
                      "s": 100,
                      "v": 100
                    }
                  }
                ],
                "scenes": [
                  {
                    "id": "sunrise",
                    "name": "Рассвет"
                  },
                  {
                    "id": "sunset",
                    "name": "Закат"
                  },
                  {
                    "id": "circadian",
                    "name": "Циркадный"
                  },
                  {
                    "id": "party",
                    "name": "Вечеринка"
                  },
                  {
                    "id": "snake",
                    "name": "Год змеи"
                  },
                  {
                    "id": "gaming",
                    "name": "Игра"
                  },
                  {
                    "id": "night",
                    "name": "Вечерний"
                  },
                  {
                    "id": "christmas",
                    "name": "Рождество"
                  },
                  {
                    "id": "romance",
                    "name": "Романтика"
                  },
                  {
                    "id": "candle",
                    "name": "Свеча"
                  },
                  {
                    "id": "northern",
                    "name": "Северное сияние"
                  },
                  {
                    "id": "fairy",
                    "name": "Сказочные огни"
                  },
                  {
                    "id": "reading",
                    "name": "Чтение"
                  }
                ],
                "custom_scenes": null,
                "custom_scenes_available": true,
                "color_model": "hsv",
                "temperature_k": {
                  "min": 2700,
                  "max": 6500
                }
              }
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.range",
              "state": {
                "instance": "brightness",
                "value": 100
              },
              "parameters": {
                "instance": "brightness",
                "name": "яркость",
                "unit": "unit.percent",
                "random_access": true,
                "looped": false,
                "range": {
                  "min": 1,
                  "max": 100,
                  "precision": 1
                }
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740118154.003374,
            "changed": 1739745798.963376
          },
          "state": "online",
          "render_info": {
            "icon": {
              "id": "yandex.light.unicorn",
              "color": "white"
            }
          },
          "created": "2024-09-28T08:45:35Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00544",
              "hw_version": "0",
              "sw_version": "26",
              "setup_code": "",
              "serial_number": "HL00P4Q000K5RW"
            },
            "ota_update": {
              "status": "downloading",
              "version": 0
            }
          }
        },
        {
          "id": "ccaa7aeb-bc9e-4596-8b3a-bb54867baa03",
          "name": "Подсветка",
          "type": "devices.types.light",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "voltage",
                "name": "текущее напряжение",
                "unit": "unit.volt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 228
              },
              "state_changed_at": "2025-02-21T06:00:25Z",
              "last_updated": "2025-02-21T06:00:25Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "power",
                "name": "потребляемая мощность",
                "unit": "unit.watt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-02-20T09:04:47Z",
              "last_updated": "2025-02-20T09:04:47Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "amperage",
                "name": "потребление тока",
                "unit": "unit.ampere"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2025-02-20T09:04:47Z",
              "last_updated": "2025-02-20T09:04:47Z"
            }
          ],
          "item_type": "device",
          "skill_id": "T",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117625.900207,
            "changed": 1738673796.858098
          },
          "state": "online",
          "render_info": {
            "icon": {
              "id": "yandex.socket"
            }
          },
          "created": "2024-07-11T17:02:56Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-0007",
              "hw_version": "1.0",
              "sw_version": "1.0.4"
            }
          }
        },
        {
          "id": "c3397fcc-3802-4cb7-875d-04b5783b58f8",
          "name": "Посудомоечная машина",
          "type": "devices.types.dishwasher",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.dishwasher.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.mode",
              "state": {
                "instance": "dishwashing",
                "value": "eco"
              },
              "parameters": {
                "instance": "dishwashing",
                "name": "мойка посуды",
                "modes": [
                  {
                    "value": "eco",
                    "name": "Эко"
                  }
                ]
              }
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.toggle",
              "state": {
                "instance": "ionization",
                "value": false
              },
              "parameters": {
                "instance": "ionization",
                "name": "ионизация"
              }
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.toggle",
              "state": {
                "instance": "pause",
                "value": false
              },
              "parameters": {
                "instance": "pause",
                "name": "пауза"
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "c191ed87-45b4-4f73-8cf3-eb6b9ec80c42",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740119940.222176,
            "changed": 1736240163.772226
          },
          "state": "online",
          "created": "2024-07-08T17:48:04Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Midea"
            }
          }
        },
        {
          "id": "2880c7fc-7ef3-46b5-aa44-d2ac104f5e25",
          "name": "Правая верхняя кнопка",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "button",
                "name": "кнопка",
                "events": [
                  {
                    "value": "click",
                    "name": "нажатие"
                  },
                  {
                    "value": "double_click",
                    "name": "двойное нажатие"
                  },
                  {
                    "value": "long_press",
                    "name": "долгое нажатие"
                  }
                ]
              },
              "state": {
                "instance": "button",
                "status": "normal",
                "value": "click"
              },
              "last_activated": "2025-02-20T06:52:38Z",
              "last_updated": "2025-02-20T06:52:38Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740110960.927484,
            "changed": 1738328044.286817
          },
          "state": "online",
          "created": "2025-01-31T12:53:27Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00535",
              "hw_version": "0",
              "sw_version": "16",
              "setup_code": "",
              "serial_number": "HS501M2000A3RW"
            }
          }
        },
        {
          "id": "577e85c3-8836-4bd3-865e-e560fba29caa",
          "name": "Правая нижняя кнопка",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "button",
                "name": "кнопка",
                "events": [
                  {
                    "value": "click",
                    "name": "нажатие"
                  },
                  {
                    "value": "double_click",
                    "name": "двойное нажатие"
                  },
                  {
                    "value": "long_press",
                    "name": "долгое нажатие"
                  }
                ]
              },
              "state": {
                "instance": "button",
                "status": "normal",
                "value": "click"
              },
              "last_activated": "2025-02-20T07:30:03Z",
              "last_updated": "2025-02-20T07:30:03Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "multidevice_id": "37e723a2-6e2a-43dd-ad45-ae564fd8bcd7",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740110960.359584,
            "changed": 1738328036.711349
          },
          "state": "online",
          "created": "2025-01-31T12:53:26Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-00535",
              "hw_version": "0",
              "sw_version": "16",
              "setup_code": "",
              "serial_number": "HS501M2000A3RW"
            }
          }
        },
        {
          "id": "cdd3087d-0d2b-400d-b1c9-cd6849b1f6ab",
          "name": "Пылесос",
          "type": "devices.types.vacuum_cleaner",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.vacuum_cleaner.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.mode",
              "state": {
                "instance": "work_speed",
                "value": "quiet"
              },
              "parameters": {
                "instance": "work_speed",
                "name": "скорость работы",
                "modes": [
                  {
                    "value": "normal",
                    "name": "Нормальный"
                  },
                  {
                    "value": "quiet",
                    "name": "Тихий"
                  }
                ]
              }
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.toggle",
              "state": {
                "instance": "pause",
                "value": true
              },
              "parameters": {
                "instance": "pause",
                "name": "пауза"
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "state_changed_at": "2025-02-20T09:36:55Z",
              "last_updated": "2025-02-20T09:36:55Z"
            }
          ],
          "item_type": "device",
          "skill_id": "ad26f8c2-fc31-4928-a653-d829fda7e6c2",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740044215.219942,
            "changed": 1738849862.876348
          },
          "state": "online",
          "created": "2024-11-10T14:01:50Z",
          "parameters": {
            "device_info": {
              "manufacturer": "ijai",
              "model": "ijai.vacuum.v17",
              "sw_version": "4.3.3_0028"
            }
          }
        },
        {
          "id": "18918a7c-3633-4bb4-aeb2-26104b68e38e",
          "name": "Радиатор",
          "type": "devices.types.thermostat",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.range",
              "state": {
                "instance": "temperature",
                "value": 30
              },
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius",
                "random_access": true,
                "looped": false,
                "range": {
                  "min": 5,
                  "max": 35,
                  "precision": 1
                }
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "updated": 1739971671.635869,
            "changed": 1733905127.969598
          },
          "state": "online",
          "created": "2024-10-03T08:33:28Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "ME167",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "a8bb3e9e-7393-4683-8b30-761f1dcd2e89",
          "name": "Радиатор",
          "type": "devices.types.thermostat",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.range",
              "state": {
                "instance": "temperature",
                "value": 16
              },
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius",
                "random_access": true,
                "looped": false,
                "range": {
                  "min": 5,
                  "max": 35,
                  "precision": 1
                }
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1739964813.44609,
            "changed": 1734109252.277863
          },
          "state": "online",
          "created": "2024-08-09T15:39:29Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "ME167",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "3ec71034-31de-4551-afe4-c7d5e5e334e6",
          "name": "Свет 1",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "updated": 1740084496.714989,
            "changed": 1738253647.455466
          },
          "state": "online",
          "created": "2024-08-08T13:25:24Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "06373972-8464-4920-a866-73448fedea8f",
          "name": "Свет 2",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "updated": 1739907906.472888,
            "changed": 1738253647.455466
          },
          "state": "online",
          "created": "2024-08-08T13:25:21Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "900dca1a-e53a-418c-82cc-5ebb8795e266",
          "name": "Свет балкон",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Балкон",
          "status_info": {
            "status": "online",
            "updated": 1739266431.16809,
            "changed": 1734101796.169981
          },
          "state": "online",
          "created": "2024-08-08T13:25:23Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "一路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "68695c4b-c4b3-4eef-bd06-0788f0b2b1e3",
          "name": "Свет ванная",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "updated": 1740119975.0379,
            "changed": 1738948113.494048
          },
          "state": "online",
          "created": "2024-08-08T13:25:23Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "一路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "bd142373-4be7-4a22-ba7f-67c62520e419",
          "name": "Свет гардероб",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гардероб",
          "status_info": {
            "status": "online",
            "updated": 1740047494.139372,
            "changed": 1731230146.227602
          },
          "state": "online",
          "created": "2024-08-08T13:25:22Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "2d330ad6-b76c-4bfb-82ba-a507c5750048",
          "name": "Свет гардероб прихожая",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Прихожая",
          "status_info": {
            "status": "online",
            "updated": 1738825720.755574,
            "changed": 1723476594.075531
          },
          "state": "online",
          "created": "2024-08-08T13:25:21Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "4c661077-a9fa-47ef-bf60-79bce8d3c673",
          "name": "Свет гостиная",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1738825720.755574,
            "changed": 1734022480.504348
          },
          "state": "online",
          "created": "2024-08-08T13:25:22Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "774c6faa-fcb0-466b-a5ad-4ba91bf8a823",
          "name": "Свет гостиная 1",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1739974647.62443,
            "changed": 1738072742.37062
          },
          "state": "online",
          "created": "2024-08-08T13:25:22Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "ab1142bf-a8de-4735-9f18-6bc2e3d031fb",
          "name": "Свет гостиная 2",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": true
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1739974647.62443,
            "changed": 1738072742.37062
          },
          "state": "online",
          "created": "2024-08-08T13:25:24Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "1f53416c-8b8e-4ca2-96f3-8abb7c8881f1",
          "name": "Свет кухня",
          "type": "devices.types.switch",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.switch.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "updated": 1738964221.859982,
            "changed": 1723476594.075531
          },
          "state": "online",
          "created": "2024-08-08T13:25:22Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "75cb6fc4-3fd9-4c60-a2ef-ba32cf97961f",
          "name": "Свет прихожая",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Прихожая",
          "status_info": {
            "status": "online",
            "updated": 1740119683.198084,
            "changed": 1738474799.703483
          },
          "state": "online",
          "created": "2024-08-08T13:25:24Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "e2aa81c1-1bdb-454b-8881-82c17289d472",
          "name": "Свет спальня 1",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "updated": 1740084338.330975,
            "changed": 1723220145.990545
          },
          "state": "online",
          "created": "2024-08-08T13:25:23Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "1da20807-9966-4c1b-ae47-8665c5c989d3",
          "name": "Свет спальня 2",
          "type": "devices.types.light.ceiling",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.light.ceiling.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "updated": 1740084338.330975,
            "changed": 1729182526.875941
          },
          "state": "online",
          "created": "2024-08-08T13:25:23Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "二路开关 CB3S",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "965bd43a-5d12-48ad-8f2a-bc0a7b20991c",
          "name": "Станция Мини new",
          "type": "devices.types.smart_speaker.yandex.station.mini_2",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station.mini_2_updated.png/orig",
          "capabilities": [
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "text_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "phrase_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "weather",
                "value": {}
              },
              "parameters": {
                "instance": "weather"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "volume",
                "value": {
                  "value": 3
                }
              },
              "parameters": {
                "instance": "volume"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "music_play",
                "value": {
                  "play_in_background": true
                }
              },
              "parameters": {
                "instance": "music_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "news",
                "value": {
                  "topic": "index",
                  "play_in_background": true,
                  "topic_name": "Главное"
                }
              },
              "parameters": {
                "instance": "news"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "sound_play",
                "value": {
                  "sound": "chainsaw-1",
                  "sound_name": "Бензопила"
                }
              },
              "parameters": {
                "instance": "sound_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "stop_everything",
                "value": {}
              },
              "parameters": {
                "instance": "stop_everything"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "tts",
                "value": {
                  "text": "",
                  "whisper": false,
                  "lang": ""
                }
              },
              "parameters": {
                "instance": "tts"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "alice_show",
                "value": {}
              },
              "parameters": {
                "instance": "alice_show"
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "voice_activity",
                "name": "активация по голосу",
                "events": [
                  {
                    "value": "speech_finished",
                    "name": "заговорили рядом",
                    "can_be_deferred": true
                  },
                  {
                    "value": "no_speech_within_5m",
                    "name": "не слышит голос 5 минут"
                  },
                  {
                    "value": "no_speech_within_10m",
                    "name": "не слышит голос 10 минут"
                  },
                  {
                    "value": "no_speech_within_30m",
                    "name": "не слышит голос 30 минут"
                  },
                  {
                    "value": "speech_finished_multiple",
                    "name": "заговорили рядом"
                  }
                ]
              },
              "state": null,
              "last_updated": "2024-10-22T09:34:08Z"
            }
          ],
          "item_type": "device",
          "skill_id": "Q",
          "quasar_info": {
            "device_id": "M0011Y30095FXK",
            "platform": "yandexmini_2",
            "color": "black",
            "multiroom_available": true,
            "multistep_scenarios_available": true,
            "device_discovery_methods": [
              "matter"
            ],
            "device_setup_methods": [
              "ble"
            ]
          },
          "room_name": "Ванная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1739485995.506471,
            "changed": 1738253692.370784
          },
          "state": "online",
          "created": "2022-11-17T15:15:42Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex Services AG",
              "model": "YNDX-00020"
            }
          }
        },
        {
          "id": "7cef70cb-60fb-4064-a978-58a0097568fc",
          "name": "Телевизор",
          "type": "devices.types.media_device.tv",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.media_device.tv.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": false,
              "type": "devices.capabilities.on_off",
              "state": null,
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.range",
              "state": null,
              "parameters": {
                "instance": "volume",
                "name": "громкость",
                "unit": "",
                "random_access": false,
                "looped": false
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.range",
              "state": null,
              "parameters": {
                "instance": "channel",
                "name": "канал",
                "unit": "",
                "random_access": true,
                "looped": false
              }
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.toggle",
              "state": {
                "instance": "mute",
                "value": true
              },
              "parameters": {
                "instance": "mute",
                "name": "без звука"
              }
            }
          ],
          "properties": [],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "updated": 1740117645.17337,
            "changed": 1723476594.075531
          },
          "state": "online",
          "created": "2024-08-08T13:25:25Z",
          "parameters": {
            "device_info": {
              "manufacturer": "SMART LIFE",
              "model": "YRC11",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "3c7fe2c1-cb3e-439a-a366-ec1c6238bb4b",
          "name": "Теплый пол",
          "type": "devices.types.thermostat",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.range",
              "state": {
                "instance": "temperature",
                "value": 35
              },
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius",
                "random_access": true,
                "looped": false,
                "range": {
                  "min": 5,
                  "max": 45,
                  "precision": 0.5
                }
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 24
              },
              "state_changed_at": "2025-02-06T07:08:39Z",
              "last_updated": "2025-02-06T07:08:39Z"
            }
          ],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Ванная",
          "status_info": {
            "status": "no_data",
            "updated": 1739806692.437239,
            "changed": 1738825719.7466912
          },
          "state": "no_data",
          "created": "2024-08-08T13:25:25Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "009 采暖",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "64f7c874-fada-446c-8cc3-83848e6d54ff",
          "name": "Теплый пол",
          "type": "devices.types.thermostat",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.thermostat.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            },
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.range",
              "state": {
                "instance": "temperature",
                "value": 30
              },
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius",
                "random_access": true,
                "looped": false,
                "range": {
                  "min": 5,
                  "max": 45,
                  "precision": 0.5
                }
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "temperature",
                "name": "температура",
                "unit": "unit.temperature.celsius"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 24.5
              },
              "state_changed_at": "2025-02-06T07:08:39Z",
              "last_updated": "2025-02-06T07:08:39Z"
            }
          ],
          "item_type": "device",
          "skill_id": "35e2897a-c583-495a-9e33-f5d6f0f4cb49",
          "room_name": "Прихожая",
          "status_info": {
            "status": "no_data",
            "updated": 1738912206.403377,
            "changed": 1738825719.7466924
          },
          "state": "no_data",
          "created": "2024-08-08T13:25:25Z",
          "parameters": {
            "device_info": {
              "manufacturer": "TUYA INC.",
              "model": "009 采暖",
              "hw_version": "1.0",
              "sw_version": "1.0"
            }
          }
        },
        {
          "id": "f6e82d01-207b-4224-8ff1-12397f3cbf1a",
          "name": "Увлажнитель",
          "type": "devices.types.socket",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.socket.svg/orig",
          "capabilities": [
            {
              "reportable": true,
              "retrievable": true,
              "type": "devices.capabilities.on_off",
              "state": {
                "instance": "on",
                "value": false
              },
              "parameters": {
                "split": false
              },
              "can_be_deferred": true
            }
          ],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "voltage",
                "name": "текущее напряжение",
                "unit": "unit.volt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 229
              },
              "state_changed_at": "2025-02-21T05:55:46Z",
              "last_updated": "2025-02-21T05:55:46Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "power",
                "name": "потребляемая мощность",
                "unit": "unit.watt"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2024-12-09T05:02:38Z",
              "last_updated": "2025-02-06T07:08:38Z"
            },
            {
              "type": "devices.properties.float",
              "retrievable": true,
              "reportable": true,
              "parameters": {
                "instance": "amperage",
                "name": "потребление тока",
                "unit": "unit.ampere"
              },
              "state": {
                "percent": null,
                "status": null,
                "value": 0
              },
              "state_changed_at": "2024-12-09T05:02:38Z",
              "last_updated": "2025-02-06T07:08:38Z"
            }
          ],
          "item_type": "device",
          "skill_id": "T",
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117346.854682,
            "changed": 1739860240.044064
          },
          "state": "online",
          "render_info": {
            "icon": {
              "id": "yandex.socket"
            }
          },
          "created": "2024-08-13T15:34:18Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex",
              "model": "YNDX-0007",
              "hw_version": "1.0",
              "sw_version": "1.0.4"
            }
          }
        },
        {
          "id": "40f3a181-4f6a-4041-b1cd-c38313198744",
          "name": "Умная кнопка",
          "type": "devices.types.sensor.button",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.other.svg/orig",
          "capabilities": [],
          "properties": [
            {
              "type": "devices.properties.float",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "battery_level",
                "name": "уровень заряда",
                "unit": "unit.percent"
              },
              "state": {
                "percent": 100,
                "status": "normal",
                "value": 100
              },
              "trend": {
                "status": "normal"
              },
              "last_updated": "2025-02-21T05:57:17Z"
            },
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "button",
                "name": "кнопка",
                "events": [
                  {
                    "value": "click",
                    "name": "нажатие"
                  },
                  {
                    "value": "double_click",
                    "name": "двойное нажатие"
                  },
                  {
                    "value": "long_press",
                    "name": "долгое нажатие"
                  }
                ]
              },
              "state": {
                "instance": "button",
                "status": "normal",
                "value": "click"
              },
              "last_activated": "2025-02-20T02:46:15Z",
              "state_changed_at": "2025-02-20T02:46:15Z",
              "last_updated": "2025-02-20T09:04:44Z"
            }
          ],
          "item_type": "device",
          "skill_id": "YANDEX_IO",
          "room_name": "Кухня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117438.764009,
            "changed": 1738253631.413103
          },
          "state": "online",
          "created": "2024-09-05T10:53:00Z",
          "parameters": {
            "device_info": {
              "manufacturer": "",
              "model": "lumi.remote.b1acn01",
              "hw_version": "",
              "sw_version": "2",
              "setup_code": ""
            }
          }
        },
        {
          "id": "4191e309-c8c9-4e19-9655-26a4bfdd37ec",
          "name": "Яндекс Станция 2",
          "type": "devices.types.smart_speaker.yandex.station.midi",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station.midi.png/orig",
          "capabilities": [
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.color_setting",
              "state": {
                "instance": "scene",
                "value": {
                  "id": "lava_lamp",
                  "name": "Лава лампа"
                }
              },
              "parameters": {
                "instance": "color",
                "name": "цвет",
                "palette": [],
                "custom_palette": null,
                "scenes": [
                  {
                    "id": "lava_lamp",
                    "name": "Лава лампа"
                  },
                  {
                    "id": "inactive",
                    "name": "Неактивный"
                  },
                  {
                    "id": "night",
                    "name": "Ночь"
                  },
                  {
                    "id": "candle",
                    "name": "Свеча"
                  }
                ],
                "custom_scenes": null,
                "custom_scenes_available": false
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "text_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "phrase_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "weather",
                "value": {}
              },
              "parameters": {
                "instance": "weather"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "volume",
                "value": {
                  "value": 3
                }
              },
              "parameters": {
                "instance": "volume"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "music_play",
                "value": {
                  "play_in_background": true
                }
              },
              "parameters": {
                "instance": "music_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "news",
                "value": {
                  "topic": "index",
                  "play_in_background": true,
                  "topic_name": "Главное"
                }
              },
              "parameters": {
                "instance": "news"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "sound_play",
                "value": {
                  "sound": "chainsaw-1",
                  "sound_name": "Бензопила"
                }
              },
              "parameters": {
                "instance": "sound_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "stop_everything",
                "value": {}
              },
              "parameters": {
                "instance": "stop_everything"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "tts",
                "value": {
                  "text": "",
                  "whisper": false,
                  "lang": ""
                }
              },
              "parameters": {
                "instance": "tts"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "alice_show",
                "value": {}
              },
              "parameters": {
                "instance": "alice_show"
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "voice_activity",
                "name": "активация по голосу",
                "events": [
                  {
                    "value": "speech_finished",
                    "name": "заговорили рядом",
                    "can_be_deferred": true
                  },
                  {
                    "value": "no_speech_within_5m",
                    "name": "не слышит голос 5 минут"
                  },
                  {
                    "value": "no_speech_within_10m",
                    "name": "не слышит голос 10 минут"
                  },
                  {
                    "value": "no_speech_within_30m",
                    "name": "не слышит голос 30 минут"
                  },
                  {
                    "value": "speech_finished_multiple",
                    "name": "заговорили рядом"
                  }
                ]
              },
              "state": null,
              "last_updated": "2024-10-22T09:34:08Z"
            }
          ],
          "item_type": "device",
          "skill_id": "Q",
          "quasar_info": {
            "device_id": "U00EG2300D88JK",
            "platform": "yandexmidi",
            "color": "black",
            "multiroom_available": true,
            "multistep_scenarios_available": true,
            "device_discovery_methods": [
              "zigbee",
              "matter"
            ],
            "device_setup_methods": [
              "ble"
            ]
          },
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117706.639967,
            "changed": 1738253631.318969
          },
          "state": "online",
          "created": "2022-12-18T12:24:47Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex Services AG",
              "model": "YNDX-00051"
            }
          }
        },
        {
          "id": "5524911b-0d75-465e-9ddb-2e4ed6040eda",
          "name": "Яндекс Станция Макс",
          "type": "devices.types.smart_speaker.yandex.station_2",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station_2.png/orig",
          "capabilities": [
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "text_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "phrase_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "weather",
                "value": {}
              },
              "parameters": {
                "instance": "weather"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "volume",
                "value": {
                  "value": 3
                }
              },
              "parameters": {
                "instance": "volume"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "music_play",
                "value": {
                  "play_in_background": true
                }
              },
              "parameters": {
                "instance": "music_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "news",
                "value": {
                  "topic": "index",
                  "play_in_background": true,
                  "topic_name": "Главное"
                }
              },
              "parameters": {
                "instance": "news"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "sound_play",
                "value": {
                  "sound": "chainsaw-1",
                  "sound_name": "Бензопила"
                }
              },
              "parameters": {
                "instance": "sound_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "stop_everything",
                "value": {}
              },
              "parameters": {
                "instance": "stop_everything"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "tts",
                "value": {
                  "text": "",
                  "whisper": false,
                  "lang": ""
                }
              },
              "parameters": {
                "instance": "tts"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "alice_show",
                "value": {}
              },
              "parameters": {
                "instance": "alice_show"
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "voice_activity",
                "name": "активация по голосу",
                "events": [
                  {
                    "value": "speech_finished",
                    "name": "заговорили рядом",
                    "can_be_deferred": true
                  },
                  {
                    "value": "no_speech_within_5m",
                    "name": "не слышит голос 5 минут"
                  },
                  {
                    "value": "no_speech_within_10m",
                    "name": "не слышит голос 10 минут"
                  },
                  {
                    "value": "no_speech_within_30m",
                    "name": "не слышит голос 30 минут"
                  },
                  {
                    "value": "speech_finished_multiple",
                    "name": "заговорили рядом"
                  }
                ]
              },
              "state": null,
              "last_updated": "2024-10-22T09:49:49Z"
            }
          ],
          "item_type": "device",
          "skill_id": "Q",
          "quasar_info": {
            "device_id": "X11N5M500JMV4K",
            "platform": "yandexstation_2",
            "color": "black",
            "multiroom_available": true,
            "multistep_scenarios_available": true,
            "device_discovery_methods": [
              "zigbee",
              "matter"
            ],
            "device_setup_methods": []
          },
          "room_name": "Гостиная",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117706.139569,
            "changed": 1738253892.426779
          },
          "state": "online",
          "created": "2024-10-22T09:34:07Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex Services AG",
              "model": "YNDX-00053"
            }
          }
        }
      ],
      "all_background_image": {
        "id": "all"
      }
    }
  ],
  "favorites": {
    "properties": [],
    "items": [
      {
        "type": "device",
        "parameters": {
          "id": "4191e309-c8c9-4e19-9655-26a4bfdd37ec",
          "name": "Яндекс Станция 2",
          "type": "devices.types.smart_speaker.yandex.station.midi",
          "icon_url": "https://avatars.mds.yandex.net/get-iot/icons-devices-devices.types.smart_speaker.yandex.station.midi.png/orig",
          "capabilities": [
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.color_setting",
              "state": {
                "instance": "scene",
                "value": {
                  "id": "lava_lamp",
                  "name": "Лава лампа"
                }
              },
              "parameters": {
                "instance": "color",
                "name": "цвет",
                "palette": [],
                "custom_palette": null,
                "scenes": [
                  {
                    "id": "lava_lamp",
                    "name": "Лава лампа"
                  },
                  {
                    "id": "inactive",
                    "name": "Неактивный"
                  },
                  {
                    "id": "night",
                    "name": "Ночь"
                  },
                  {
                    "id": "candle",
                    "name": "Свеча"
                  }
                ],
                "custom_scenes": null,
                "custom_scenes_available": false
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "text_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar.server_action",
              "state": null,
              "parameters": {
                "instance": "phrase_action"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "weather",
                "value": {}
              },
              "parameters": {
                "instance": "weather"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "volume",
                "value": {
                  "value": 3
                }
              },
              "parameters": {
                "instance": "volume"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "music_play",
                "value": {
                  "play_in_background": true
                }
              },
              "parameters": {
                "instance": "music_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "news",
                "value": {
                  "topic": "index",
                  "play_in_background": true,
                  "topic_name": "Главное"
                }
              },
              "parameters": {
                "instance": "news"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "sound_play",
                "value": {
                  "sound": "chainsaw-1",
                  "sound_name": "Бензопила"
                }
              },
              "parameters": {
                "instance": "sound_play"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "stop_everything",
                "value": {}
              },
              "parameters": {
                "instance": "stop_everything"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "tts",
                "value": {
                  "text": "",
                  "whisper": false,
                  "lang": ""
                }
              },
              "parameters": {
                "instance": "tts"
              }
            },
            {
              "reportable": false,
              "retrievable": false,
              "type": "devices.capabilities.quasar",
              "state": {
                "instance": "alice_show",
                "value": {}
              },
              "parameters": {
                "instance": "alice_show"
              }
            }
          ],
          "properties": [
            {
              "type": "devices.properties.event",
              "retrievable": false,
              "reportable": true,
              "parameters": {
                "instance": "voice_activity",
                "name": "активация по голосу",
                "events": [
                  {
                    "value": "speech_finished",
                    "name": "заговорили рядом",
                    "can_be_deferred": true
                  },
                  {
                    "value": "no_speech_within_5m",
                    "name": "не слышит голос 5 минут"
                  },
                  {
                    "value": "no_speech_within_10m",
                    "name": "не слышит голос 10 минут"
                  },
                  {
                    "value": "no_speech_within_30m",
                    "name": "не слышит голос 30 минут"
                  },
                  {
                    "value": "speech_finished_multiple",
                    "name": "заговорили рядом"
                  }
                ]
              },
              "state": null,
              "last_updated": "2024-10-22T09:34:08Z"
            }
          ],
          "item_type": "device",
          "skill_id": "Q",
          "quasar_info": {
            "device_id": "U00EG2300D88JK",
            "platform": "yandexmidi",
            "color": "black",
            "multiroom_available": true,
            "multistep_scenarios_available": true,
            "device_discovery_methods": [
              "zigbee",
              "matter"
            ],
            "device_setup_methods": [
              "ble"
            ]
          },
          "room_name": "Спальня",
          "status_info": {
            "status": "online",
            "reportable": true,
            "updated": 1740117706.639967,
            "changed": 1738253631.318969
          },
          "state": "online",
          "created": "2022-12-18T12:24:47Z",
          "parameters": {
            "device_info": {
              "manufacturer": "Yandex Services AG",
              "model": "YNDX-00051"
            }
          }
        },
        "household_id": "dfff69a9-c33e-4b47-98f5-489c7af730fd",
        "room_id": "2673b7fb-06ba-4821-a11f-eac45b69723d"
      }
    ],
    "background_image": {
      "id": "favorite"
    }
  },
  "updates_url": "wss://push.yandex.ru/v2/subscribe/websocket?client=searchapp&filter=%7B%22rules%22%3A%5B%7B%22if%22%3A%7B%22%24event%22%3A%5B%22update_states%22%2C%22update_device_list%22%2C%22update_scenario_list%22%2C%22finish_discovery%22%2C%22add_voiceprint%22%2C%22remove_voiceprint%22%2C%22update_household_invitations_list%22%2C%22remote_matching%22%2C%22ir_learning_add%22%2C%22ir_learning_add_custom_button%22%2C%22ir_learning_delete_custom_button%22%2C%22ir_add_remote%22%2C%22update_phone_linking_state%22%2C%22ota_update_state%22%2C%22ble_setup_discovery_finished%22%2C%22discovery_progress_stage%22%2C%22discovery_progress_completed%22%2C%22wifi_network_connected%22%2C%22wifi_network_connection_error%22%2C%22smart_scenario_created%22%2C%22smart_scenario_updated%22%2C%22smart_scenario_archived%22%2C%22smart_scenario_activation_switched%22%5D%7D%2C%22do%22%3A%22send_bright%22%7D%2C%7B%22do%22%3A%22skip%22%7D%5D%2C%22vars%22%3A%7B%7D%7D&service=alice-iot&session=236d2717-44b0-4e32-b53b-a3a8ab15442d&sign=ce4f7ee5a5b43da0961494f0ce3ee056&ts=1740148820&user=727659051"
}