package openai

import (
	"one-api/common"
	"one-api/relay/channel/ai360"
	"one-api/relay/channel/baichuan"
	"one-api/relay/channel/deepseek"
	"one-api/relay/channel/doubao"
	"one-api/relay/channel/groq"
	"one-api/relay/channel/lingyiwanwu"
	"one-api/relay/channel/minimax"
	"one-api/relay/channel/mistral"
	"one-api/relay/channel/moonshot"
	"one-api/relay/channel/togetherai"
)

var CompatibleChannels = []int{
	common.ChannelTypeAzure,
	common.ChannelType360,
	common.ChannelTypeMoonshot,
	common.ChannelTypeBaichuan,
	common.ChannelTypeMinimax,
	common.ChannelTypeMistral,
	common.ChannelTypeGroq,
	common.ChannelTypeLingYiWanWu,
	common.ChannelTypeDeepSeek,
	common.ChannelTypeTogetherAI,
	common.ChannelTypeDouBao,
}

func GetCompatibleChannelMeta(channelType int) (string, []string) {
	switch channelType {
	case common.ChannelTypeAzure:
		return "Azure OpenAI", ModelList
	case common.ChannelType360:
		return "360", ai360.ModelList
	case common.ChannelTypeMoonshot:
		return "Moonshot", moonshot.ModelList
	case common.ChannelTypeBaichuan:
		return "Baichuan", baichuan.ModelList
	case common.ChannelTypeMinimax:
		return "Minimax", minimax.ModelList
	case common.ChannelTypeMistral:
		return "Mistralai", mistral.ModelList
	case common.ChannelTypeGroq:
		return "Groq", groq.ModelList
	case common.ChannelTypeLingYiWanWu:
		return "lingyiwanwu", lingyiwanwu.ModelList
	case common.ChannelTypeDeepSeek:
		return "Deepseek", deepseek.ModelList
	case common.ChannelTypeTogetherAI:
		return "Togetherai", togetherai.ModelList
	case common.ChannelTypeDouBao:
		return "Doubao", doubao.ModelList
	default:
		return "OpenAI", ModelList
	}
}
