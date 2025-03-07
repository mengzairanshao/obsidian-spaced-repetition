// 简体中文

export default {
    // flashcard-modal.tsx
    DECKS: "卡组",
    DUE_CARDS: "到期卡片",
    NEW_CARDS: "新卡片",
    TOTAL_CARDS: "全部卡片",
    EDIT_LATER: "稍后编辑",
    RESET_CARD_PROGRESS: "重置卡片",
    HARD: "较难",
    GOOD: "记得",
    EASY: "简单",
    SHOW_ANSWER: "显示答案",
    CARD_PROGRESS_RESET: "卡片已被重置。",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "打开一个笔记开始复习",
    REVIEW_CARDS: "复习卡片",
    REVIEW_EASY_FILE_MENU: "复习：简单",
    REVIEW_GOOD_FILE_MENU: "复习：记得",
    REVIEW_HARD_FILE_MENU: "复习：较难",
    REVIEW_NOTE_EASY_CMD: "标记为“简单”",
    REVIEW_NOTE_GOOD_CMD: "标记为“记得”",
    REVIEW_NOTE_HARD_CMD: "标记为“较难”",
    REVIEW_CARDS_IN_NOTE: "复习此笔记中的卡片",
    CRAM_CARDS_IN_NOTE: "集中复习此笔记中的卡片",
    REVIEW_ALL_CARDS: "复习所有笔记中的卡片",
    VIEW_STATS: "查看数据",
    STATUS_BAR: "复习: ${dueNotesCount} 笔记, ${dueFlashcardsCount} 卡片已到期",
    SYNC_TIME_TAKEN: "同步时间 ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "笔记保存在已被忽略的路径中（检查设置选项）。",
    PLEASE_TAG_NOTE: "请将需要复习的笔记中加入正确的标签（检查设置选项）。",
    RESPONSE_RECEIVED: "反馈已收到",
    NO_DECK_EXISTS: "没有 ${deckName} 卡组",
    ALL_CAUGHT_UP: "都复习完啦，你真棒！",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} 天",
    MONTHS_STR_IVL: "${interval} 月",
    YEARS_STR_IVL: "${interval} 年",
    DAYS_STR_IVL_MOBILE: "${interval}天",
    MONTHS_STR_IVL_MOBILE: "${interval}月",
    YEARS_STR_IVL_MOBILE: "${interval}年",

    // settings.ts
    SETTINGS_HEADER: "间隔重复插件 - 设置",
    CHECK_WIKI: '了解更多, 请点击 <a href="${wiki_url}">wiki</a>.',
    FOLDERS_TO_IGNORE: "忽略此文件夹",
    FOLDERS_TO_IGNORE_DESC: "输入文件夹路径，用新建行分隔，例如：Templates Meta/Scripts",
    FLASHCARDS: "卡片",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    FLASHCARD_TAGS: "卡片标签",
    FLASHCARD_TAGS_DESC: "输入标签，用空格或新建行分隔，例如：#flashcards #deck2 #deck3.",
    CONVERT_FOLDERS_TO_DECKS: "是否将文件夹内容转换为卡片组和子卡片组？",
    CONVERT_FOLDERS_TO_DECKS_DESC: "此选项为卡片标签选项的替代选项。",
    INLINE_SCHEDULING_COMMENTS: "是否将计划重复时间保存在卡片最后一行的同一行？",
    INLINE_SCHEDULING_COMMENTS_DESC: "HTML注释不再破坏列表格式",
    BURY_SIBLINGS_TILL_NEXT_DAY: "将关联卡片隐藏至下一天？",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC: "关联卡片是来自同一卡片的不同形式， 例如：完形填空卡片",
    SHOW_CARD_CONTEXT: "在卡片中显示上下文？",
    SHOW_CARD_CONTEXT_DESC: "例如：标题 > 副标题 > 小标题 > ... > 小标题",
    CARD_MODAL_HEIGHT_PERCENT: "卡片高度百分比",
    CARD_MODAL_SIZE_PERCENT_DESC: "请在移动端使用并需要浏览较大图片时设为100%",
    RESET_DEFAULT: "重置为默认",
    CARD_MODAL_WIDTH_PERCENT: "卡片宽度百分比",
    FILENAME_OR_OPEN_FILE: "在复习卡片时显示文件名称而不是“稍后编辑”？",
    RANDOMIZE_CARD_ORDER: "复习时随机显示卡片？",
    DISABLE_CLOZE_CARDS: "不进行完形填空？",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "将 ==高亮== 转换为完形填空？",
    CONVERT_BOLD_TEXT_TO_CLOZES: "将 **粗体** 转换为完形填空？",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "将 {{大括号}} 转换为完形填空？",
    INLINE_CARDS_SEPARATOR: "单行卡片的分隔符",
    FIX_SEPARATORS_MANUALLY_WARNING: "注意：更改此选项后你将需要自行更改已存在卡片的分隔符。",
    INLINE_REVERSED_CARDS_SEPARATOR: "单行翻转卡片的分隔符",
    MULTILINE_CARDS_SEPARATOR: "多行卡片的分隔符",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "多行翻转卡片的分隔符",
    NOTES: "笔记",
    TAGS_TO_REVIEW: "复习标签",
    TAGS_TO_REVIEW_DESC: "输入标签，用空格或新建行分隔，例如：#review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "复习随机笔记",
    OPEN_RANDOM_NOTE_DESC: "关闭此选项，笔记将以重要度(PageRank)排序。",
    AUTO_NEXT_NOTE: "复习后自动打开下一个笔记",
    DISABLE_FILE_MENU_REVIEW_OPTIONS: "关闭文件选单中的复习选项 例如：复习：简单 记得 较难",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "关闭此选项后你可以使用快捷键开始复习。重新启动Obsidian使本选项生效。",
    MAX_N_DAYS_REVIEW_QUEUE: "右边栏中显示的最大天数",
    MIN_ONE_DAY: "天数最小值为1",
    VALID_NUMBER_WARNING: "请输入有效的数字。",
    ALGORITHM: "算法",
    CHECK_ALGORITHM_WIKI: '了解更多, 请点击 <a href="${algo_url}">algorithm implementation</a>.',
    BASE_EASE: "基础掌握程度",
    BASE_EASE_DESC: "最小值130，推荐值约250.",
    BASE_EASE_MIN_WARNING: "基础掌握程度的最小值为130。",
    LAPSE_INTERVAL_CHANGE: "将复习时标注为“较难”的卡片或笔记复习间隔缩短",
    LAPSE_INTERVAL_CHANGE_DESC: "新复习间隔 = 原复习间隔 * 间隔改变系数 / 100.",
    EASY_BONUS: "简单奖励",
    EASY_BONUS_DESC: "简单奖励设定“记得”和“简单”卡片或笔记的复习间隔差距（最小值100%）。",
    EASY_BONUS_MIN_WARNING: "简单奖励至少为100。",
    MAX_INTERVAL: "最大间隔",
    MAX_INTERVAL_DESC: "设定复习的最大间隔时间（默认值100年）。",
    MAX_INTERVAL_MIN_WARNING: "最大间隔至少为1天",
    MAX_LINK_CONTRIB: "最大链接收益",
    MAX_LINK_CONTRIB_DESC: "由原掌握程度链接的笔记给与的最大加权掌握度收益。",
    LOGGING: "记录中",
    DISPLAY_DEBUG_INFO: "在开发者控制台中显示调试信息？",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "笔记复习序列",
    CLOSE: "临近",
    NEW: "新",
    YESTERDAY: "昨天",
    TODAY: "今天",
    TOMORROW: "明天",

    // stats-modal.tsx
    STATS_TITLE: "数据",
    MONTH: "月",
    QUARTER: "季",
    YEAR: "年",
    LIFETIME: "全部",
    FORECAST: "预期",
    FORECAST_DESC: "将要到期的卡片数量",
    SCHEDULED: "已排期",
    DAYS: "天",
    NUMBER_OF_CARDS: "卡片数量",
    REVIEWS_PER_DAY: "平均: 复习${avg} /天",
    INTERVALS: "间隔",
    INTERVALS_DESC: "到下一次复习的时间间隔",
    COUNT: "计数",
    INTERVALS_SUMMARY: "平均间隔时间: ${avg}, 最长间隔时间: ${longest}",
    EASES: "Eases",
    EASES_SUMMARY: "平均掌握程度: ${avgEase}",
    CARD_TYPES: "卡片类型",
    CARD_TYPES_DESC: "如有，将显示隐藏的卡片",
    CARD_TYPE_NEW: "新",
    CARD_TYPE_YOUNG: "较新",
    CARD_TYPE_MATURE: "熟悉",
    CARD_TYPES_SUMMARY: "总卡片数: ${totalCardsCount}",
};
