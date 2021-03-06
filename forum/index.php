<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Форум");
?>
<?if (!$USER->IsAuthorized()) {LocalRedirect('/personal/?register=yes', 301);}?>
<div class="box forum">
	 <?$APPLICATION->IncludeComponent(
	"bitrix:forum",
	"rossdent_forum",
	array(
		"AJAX_POST" => "N",
		"ATTACH_MODE" => array(
			0 => "NAME",
		),
		"ATTACH_SIZE" => "500",
		"CACHE_TIME" => "3600",
		"CACHE_TIME_FOR_FORUM_STAT" => "3600",
		"CACHE_TIME_USER_STAT" => "60",
		"CACHE_TYPE" => "A",
		"CHECK_CORRECT_PATH_TEMPLATES" => "Y",
		"CHECK_CORRECT_TEMPLATES" => "N",
		"COMPONENT_TEMPLATE" => "rossdent_forum",
		"DATE_FORMAT" => "d.m.Y",
		"DATE_TIME_FORMAT" => "d.m.Y H:i:s",
		"DISPLAY_PANEL" => "N",
		"EDITOR_CODE_DEFAULT" => "N",
		"FID" => array(
			0 => "3",
			1 => "4",
			2 => "5",
			3 => "6",
			4 => "7",
			5 => "8",
		),
		"FILES_COUNT" => "5",
		"FORUMS_PER_PAGE" => "15",
		"HELP_CONTENT" => "",
		"IMAGE_SIZE" => "500",
		"MESSAGES_PER_PAGE" => "3",
		"NAME_TEMPLATE" => "",
		"NO_WORD_LOGIC" => "N",
		"PAGE_NAVIGATION_TEMPLATE" => "forum",
		"PAGE_NAVIGATION_WINDOW" => "5",
		"PATH_TO_AUTH_FORM" => "",
		"RATING_ID" => array(
		),
		"RATING_TYPE" => "",
		"RESTART" => "N",
		"RSS_CACHE" => "1800",
		"RSS_COUNT" => "30",
		"RSS_TN_DESCRIPTION" => "",
		"RSS_TN_TITLE" => "",
		"RSS_TYPE_RANGE" => "RSS2",
		"RULES_CONTENT" => "",
		"SEF_FOLDER" => "/forum/",
		"SEF_MODE" => "Y",
		"SEND_ICQ" => "A",
		"SEND_MAIL" => "E",
		"SEO_USER" => "N",
		"SEO_USE_AN_EXTERNAL_SERVICE" => "N",
		"SET_DESCRIPTION" => "N",
		"SET_NAVIGATION" => "N",
		"SET_PAGE_PROPERTY" => "N",
		"SET_TITLE" => "Y",
		"SHOW_AUTHOR_COLUMN" => "N",
		"SHOW_AUTH_FORM" => "N",
		"SHOW_FIRST_POST" => "N",
		"SHOW_FORUMS" => "N",
		"SHOW_FORUM_ANOTHER_SITE" => "Y",
		"SHOW_FORUM_USERS" => "N",
		"SHOW_LEGEND" => "N",
		"SHOW_NAME_LINK" => "Y",
		"SHOW_NAVIGATION" => "N",
		"SHOW_RATING" => "",
		"SHOW_STATISTIC_BLOCK" => array(
		),
		"SHOW_SUBSCRIBE_LINK" => "N",
		"SHOW_TAGS" => "Y",
		"SHOW_VOTE" => "N",
		"SMILES_COUNT" => "100",
		"THEME" => "green",
		"TIME_INTERVAL_FOR_USER_STAT" => "10",
		"TMPLT_SHOW_ADDITIONAL_MARKER" => "",
		"TOPICS_PER_PAGE" => "10",
		"USER_FIELDS" => array(
		),
		"USER_PROPERTY" => array(
		),
		"USE_LIGHT_VIEW" => "Y",
		"USE_NAME_TEMPLATE" => "N",
		"USE_RSS" => "N",
		"VOTE_CHANNEL_ID" => "0",
		"VOTE_COUNT_ANSWERS" => "20",
		"VOTE_COUNT_QUESTIONS" => "10",
		"VOTE_GROUP_ID" => "0",
		"VOTE_TEMPLATE" => "light",
		"WORD_LENGTH" => "50",
		"WORD_WRAP_CUT" => "23",
		"SEF_URL_TEMPLATES" => array(
			"index" => "index.php",
			"list" => "forum#FID#/",
			"read" => "forum#FID#/topic#TID#/",
			"message" => "messages/forum#FID#/topic#TID#/message#MID#/",
			"help" => "help/",
			"rules" => "rules/",
			"message_appr" => "messages/approve/forum#FID#/topic#TID#/",
			"message_move" => "messages/move/forum#FID#/topic#TID#/message#MID#/",
			"rss" => "rss/#TYPE#/#MODE#/#IID#/",
			"search" => "search/",
			"subscr_list" => "subscribe/",
			"active" => "topic/new/",
			"topic_move" => "topic/move/forum#FID#/topic#TID#/",
			"topic_new" => "topic/add/forum#FID#/",
			"topic_search" => "topic/search/",
			"user_list" => "users/",
			"profile" => "user/#UID#/edit/",
			"profile_view" => "user/#UID#/",
			"user_post" => "user/#UID#/post/#mode#/",
			"message_send" => "user/#UID#/send/#TYPE#/",
			"pm_list" => "pm/folder#FID#/",
			"pm_edit" => "pm/folder#FID#/message#MID#/user#UID#/#mode#/",
			"pm_read" => "pm/folder#FID#/message#MID#/",
			"pm_search" => "pm/search/",
			"pm_folder" => "pm/folders/",
		)
	),
	false
);?>
</div>

<?
$APPLICATION->IncludeComponent(
  "bitrix:main.include",
  ".default",
  Array(
    "AREA_FILE_SHOW" => "file",
    "AREA_FILE_SUFFIX" => "inc",
    "COMPONENT_TEMPLATE" => ".default",
    "EDIT_TEMPLATE" => "",
    "PATH" => "/bitrix/templates/rossdent/include_areas/next_action.php"
  )
);?>

<?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"rossdent_gallery", 
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "23",
		"IBLOCK_TYPE" => "media",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "3",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "MEDIA_PICTURES",
			2 => "",
		),
		"SET_BROWSER_TITLE" => "Y",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "Y",
		"SET_META_KEYWORDS" => "Y",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SHOW_404" => "N",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC",
		"COMPONENT_TEMPLATE" => "rossdent_gallery",
		"STRICT_SECTION_CHECK" => "N",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);?>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
