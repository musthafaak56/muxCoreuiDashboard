export interface preData {
  viewer_os_family: string
  viewer_application_name: string
  view_start: string
  view_end: string
  video_title: string
  total_row_count: number | null
  player_error_message: string | null
  player_error_code: string | null
  id: string
  error_type_id: string | null
  country_code: string
}

export interface firstData {
  total_row_count: null | number
  timeframe: [number, number]
  data: VideoViewData
}

export interface VideoViewData {
  asn: number
  asn_name: string | any
  asset_id: string | null
  buffering_count: number | null
  buffering_duration: number | null
  buffering_rate: number | null
  cdn: string | null
  city: string
  continent_code: string
  country_code: string
  country_name: string
  custom_1: any | null // You can replace 'any' with the actual type if known
  custom_2: any | null
  custom_3: any | null
  custom_4: any | null
  custom_5: any | null
  custom_6: any | null
  custom_7: any | null
  custom_8: any | null
  custom_9: any | null
  custom_10: any | null
  environment_id: string
  error_type_id: any | null
  events: Array<VideoViewEvent>
  exit_before_video_start: boolean
  experiment_name: string | null
  id: string
  inserted_at: string
  isp: string | null
  latitude: string
  live_stream_id: string | null
  live_stream_latency: string | null
  long_rebuffering: string | null
  long_resume: string | null
  longitude: string
  metro: string | null
  mux_api_version: string
  mux_embed: string
  mux_embed_version: string
  mux_viewer_id: string
  page_load_time: string | null
  page_type: string | null
  page_url: string | null
  platform_description: string | null
  platform_summary: string
  playback_id: string | null
  playback_score: string
  player_autoplay: boolean
  player_error_code: string | null
  player_error_message: string | null
  player_height: string | null
  player_instance_id: string
  player_language: string | null
  player_load_time: string | null
  player_mux_plugin_name: string
  player_mux_plugin_version: string
  player_name: string
  player_poster: string | null
  player_preload: boolean
  player_remote_played: boolean
  player_software: string
  player_software_version: string
  player_source_domain: string
  player_source_duration: number | null
  player_source_height: number | null
  player_source_host_name: string
  player_source_stream_type: string | null
  player_source_type: string
  player_source_url: string
  player_source_width: number | null
  player_startup_time: string | null
  player_version: string | null
  player_view_count: number | null
  player_width: string | null
  preroll_ad_asset_hostname: string | null
  preroll_ad_tag_hostname: string | null
  preroll_played: boolean
  preroll_requested: boolean
  property_id: number | null
  quality_score: string | null
  rebuffer_percentage: string | null
  rebuffering_score: string
  region: string
  requests_for_first_preroll: number | null
  session_id: string
  short_time: string
  startup_score: string
  sub_property_id: string | null
  time_to_first_frame: number | null
  updated_at: string
  used_fullscreen: boolean
  video_content_type: string | null
  video_duration: number | null
  video_encoding_variant: string | null
  video_id: string
  video_language: string | null
  video_producer: string | null
  video_series: string | null
  video_startup_failure: boolean
  video_startup_preroll_load_time: string | null
  video_startup_preroll_request_time: string | null
  video_stream_type: string | null
  video_title: string | null
  video_variant_id: string | null
  video_variant_name: string | null
  view_average_request_latency: number | null
  view_average_request_throughput: number | null
  view_drm_type: string | null
  view_dropped_frame_count: number | null
  view_end: string | null
  view_error_id: string | null
  view_has_ad: boolean
  view_id: string
  view_max_downscale_percentage: string | null
  view_max_playhead_position: string
  view_max_request_latency: number | null
  view_max_upscale_percentage: string | null
  view_playing_time: string
  view_seek_count: number | null
  view_seek_duration: number | null
  view_session_id: string | null
  view_start: string
  view_total_content_playback_time: number | null
  view_total_downscaling: number | null
  view_total_upscaling: number | null
  viewer_application_engine: string | null
  viewer_application_name: string
  viewer_application_version: string
  viewer_connection_type: string | null
  viewer_device_category: string | null
  viewer_device_manufacturer: string | null
  viewer_device_model: string | null
  viewer_device_name: string | null
  viewer_experience_score: string
  viewer_os_architecture: string | null
  viewer_os_family: string
  viewer_os_version: string
  viewer_user_agent: string
  viewer_user_id: string | null
  watch_time: number
  watched: boolean
  weighted_average_bitrate: number | null
}

export interface VideoViewEvent {
  viewer_time: number
  playback_time: number
  name: string
  event_time: number
}
