<?php
// Adding Custom EndPoints
add_action( 'rest_api_init', function () {
  register_rest_route( 'designthemes/v1', '/category/(?P<id>\d+)', array(
    'methods' => 'GET',
    'callback' => 'dt_rest_get_blocks',
  ) );
} );

function dt_rest_get_blocks( $data ) {

  if( $data['id'] == 0 ) {
      $posts = get_posts( array(
        'post_type' => 'blocks',
        'numberposts' => 100
      ) );
  } else {
      $posts = get_posts( array(
        'post_type' => 'blocks',
        'tax_query' => array(
                array(
                    'taxonomy' => 'block-categories',
                    'field'    => 'id',
                    'terms'    => $data['id']
                )
            )    
      ) );
  }

  if ( empty( $posts ) ) {
    return null;
  } 

  $json_out = array();

  foreach ($posts as $key => $post) {

      $post_id = $post->ID;
      $thumb_id = get_post_thumbnail_id( $post_id );

      $thumb_info = wp_get_attachment_image_src( $thumb_id, 'full' );

      $json_out[] = array(        
            'id' => $post_id,
            'title' => get_the_title($post_id),
            'thumbnail' => array(
                'url' => $thumb_info[0],
                'width' => $thumb_info[1],
                'height' => $thumb_info[2]
            )
       );      
  }

  return $json_out;
}

// Adding Taxonomy End Points
add_action( 'rest_api_init', function () {
  register_rest_route( 'designthemes/v1', '/categories', array(
    'methods' => 'GET',
    'callback' => 'dt_rest_get_all_block_categories',
  ) );
} );

function dt_rest_get_all_block_categories( $data ) {

    $terms = get_terms( array(
        'taxonomy' => 'block-categories',
        'hide_empty' => true,
    ) );

    $json_out = array();

    if( $terms ):
        foreach ($terms as $key => $term) {
            $json_out[] = array(
                'id' => $term->term_id,
                'name' => $term->name,
                'count' => $term->count,
                'parent' => $term->parent
            );
        }
    endif;

    return $json_out;
}