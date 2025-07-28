export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      accounts: {
        Row: {
          created_at: string | null
          id: string
          name: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      app_reviews: {
        Row: {
          brand_id: string | null
          id: number
          platform: string | null
          rating: number | null
          review_date: string | null
          review_id: string | null
          review_text: string | null
        }
        Insert: {
          brand_id?: string | null
          id?: number
          platform?: string | null
          rating?: number | null
          review_date?: string | null
          review_id?: string | null
          review_text?: string | null
        }
        Update: {
          brand_id?: string | null
          id?: number
          platform?: string | null
          rating?: number | null
          review_date?: string | null
          review_id?: string | null
          review_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "app_reviews_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          brand_id: string | null
          content: string | null
          id: number
          published_at: string | null
          title: string | null
        }
        Insert: {
          brand_id?: string | null
          content?: string | null
          id?: number
          published_at?: string | null
          title?: string | null
        }
        Update: {
          brand_id?: string | null
          content?: string | null
          id?: number
          published_at?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      brands: {
        Row: {
          brand_id: string | null
          created_at: string | null
          id: string
          name: string | null
        }
        Insert: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          brand_id?: string | null
          created_at?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      brands_following: {
        Row: {
          account_id: string | null
          brand_id: string | null
          created_at: string | null
          id: string
        }
        Insert: {
          account_id?: string | null
          brand_id?: string | null
          created_at?: string | null
          id?: string
        }
        Update: {
          account_id?: string | null
          brand_id?: string | null
          created_at?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "brands_following_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_following_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      competitors: {
        Row: {
          app_store: string | null
          blog: string | null
          brandid: string
          brandID: string | null
          brandname: string | null
          crunchbase_url: string | null
          description: string | null
          employees: string | null
          facebook: string | null
          facebook_handle: string | null
          founded: string | null
          industry: string | null
          instagram: string | null
          keywords: string | null
          linkedin: string | null
          location: string | null
          name: string | null
          notes: string | null
          pinterest: string | null
          play_store: string | null
          revenue: string | null
          similarweb_rank: string | null
          strengths: string | null
          tiktok: string | null
          twitter: string | null
          weaknesses: string | null
          website: string | null
          youtube: string | null
        }
        Insert: {
          app_store?: string | null
          blog?: string | null
          brandid: string
          brandID?: string | null
          brandname?: string | null
          crunchbase_url?: string | null
          description?: string | null
          employees?: string | null
          facebook?: string | null
          facebook_handle?: string | null
          founded?: string | null
          industry?: string | null
          instagram?: string | null
          keywords?: string | null
          linkedin?: string | null
          location?: string | null
          name?: string | null
          notes?: string | null
          pinterest?: string | null
          play_store?: string | null
          revenue?: string | null
          similarweb_rank?: string | null
          strengths?: string | null
          tiktok?: string | null
          twitter?: string | null
          weaknesses?: string | null
          website?: string | null
          youtube?: string | null
        }
        Update: {
          app_store?: string | null
          blog?: string | null
          brandid?: string
          brandID?: string | null
          brandname?: string | null
          crunchbase_url?: string | null
          description?: string | null
          employees?: string | null
          facebook?: string | null
          facebook_handle?: string | null
          founded?: string | null
          industry?: string | null
          instagram?: string | null
          keywords?: string | null
          linkedin?: string | null
          location?: string | null
          name?: string | null
          notes?: string | null
          pinterest?: string | null
          play_store?: string | null
          revenue?: string | null
          similarweb_rank?: string | null
          strengths?: string | null
          tiktok?: string | null
          twitter?: string | null
          weaknesses?: string | null
          website?: string | null
          youtube?: string | null
        }
        Relationships: []
      }
      facebook_posts: {
        Row: {
          brand_id: string | null
          brandID: string | null
          created_time: string | null
          date_posted: string | null
          id: number
          message: string | null
          post_id: string | null
        }
        Insert: {
          brand_id?: string | null
          brandID?: string | null
          created_time?: string | null
          date_posted?: string | null
          id?: number
          message?: string | null
          post_id?: string | null
        }
        Update: {
          brand_id?: string | null
          brandID?: string | null
          created_time?: string | null
          date_posted?: string | null
          id?: number
          message?: string | null
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "facebook_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      instagram_posts: {
        Row: {
          brand_id: string | null
          caption: string | null
          id: number
          media_url: string | null
          post_id: string | null
          timestamp: string | null
        }
        Insert: {
          brand_id?: string | null
          caption?: string | null
          id?: number
          media_url?: string | null
          post_id?: string | null
          timestamp?: string | null
        }
        Update: {
          brand_id?: string | null
          caption?: string | null
          id?: number
          media_url?: string | null
          post_id?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "instagram_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      linkedin_posts: {
        Row: {
          account_type: string | null
          author_handle: string | null
          author_name: string | null
          author_profile_pic: string | null
          brand_id: string | null
          brandids: string | null
          comments: number | null
          content: string | null
          date_posted: string | null
          embedded_links: string | null
          external_link_data: string | null
          hashtags: string | null
          headline: string | null
          id: number
          images: string | null
          likes: number | null
          num_comments: number | null
          num_likes: number | null
          original_url: string | null
          post_id: string | null
          post_text: string | null
          post_text_html: string | null
          post_type: string | null
          published_at: string | null
          raw_data: Json | null
          repost: boolean | null
          shares: number | null
          tagged_companies: string | null
          tagged_people: string | null
          title: string | null
          top_visible_comments: string | null
          updated_at: string | null
          url: string | null
          use_url: string | null
          user_articles: number | null
          user_followers: number | null
          user_id: string | null
          user_posts: number | null
          user_title: string | null
          videos: string | null
        }
        Insert: {
          account_type?: string | null
          author_handle?: string | null
          author_name?: string | null
          author_profile_pic?: string | null
          brand_id?: string | null
          brandids?: string | null
          comments?: number | null
          content?: string | null
          date_posted?: string | null
          embedded_links?: string | null
          external_link_data?: string | null
          hashtags?: string | null
          headline?: string | null
          id?: number
          images?: string | null
          likes?: number | null
          num_comments?: number | null
          num_likes?: number | null
          original_url?: string | null
          post_id?: string | null
          post_text?: string | null
          post_text_html?: string | null
          post_type?: string | null
          published_at?: string | null
          raw_data?: Json | null
          repost?: boolean | null
          shares?: number | null
          tagged_companies?: string | null
          tagged_people?: string | null
          title?: string | null
          top_visible_comments?: string | null
          updated_at?: string | null
          url?: string | null
          use_url?: string | null
          user_articles?: number | null
          user_followers?: number | null
          user_id?: string | null
          user_posts?: number | null
          user_title?: string | null
          videos?: string | null
        }
        Update: {
          account_type?: string | null
          author_handle?: string | null
          author_name?: string | null
          author_profile_pic?: string | null
          brand_id?: string | null
          brandids?: string | null
          comments?: number | null
          content?: string | null
          date_posted?: string | null
          embedded_links?: string | null
          external_link_data?: string | null
          hashtags?: string | null
          headline?: string | null
          id?: number
          images?: string | null
          likes?: number | null
          num_comments?: number | null
          num_likes?: number | null
          original_url?: string | null
          post_id?: string | null
          post_text?: string | null
          post_text_html?: string | null
          post_type?: string | null
          published_at?: string | null
          raw_data?: Json | null
          repost?: boolean | null
          shares?: number | null
          tagged_companies?: string | null
          tagged_people?: string | null
          title?: string | null
          top_visible_comments?: string | null
          updated_at?: string | null
          url?: string | null
          use_url?: string | null
          user_articles?: number | null
          user_followers?: number | null
          user_id?: string | null
          user_posts?: number | null
          user_title?: string | null
          videos?: string | null
        }
        Relationships: []
      }
      news_posts: {
        Row: {
          article_id: string | null
          author: string | null
          brand_id: string | null
          companies: string | null
          description: string | null
          headline: string | null
          id: number
          image_url: string | null
          original_url: string
          published_at: string | null
          raw_data: string | null
          source_name: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          article_id?: string | null
          author?: string | null
          brand_id?: string | null
          companies?: string | null
          description?: string | null
          headline?: string | null
          id?: number
          image_url?: string | null
          original_url: string
          published_at?: string | null
          raw_data?: string | null
          source_name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          article_id?: string | null
          author?: string | null
          brand_id?: string | null
          companies?: string | null
          description?: string | null
          headline?: string | null
          id?: number
          image_url?: string | null
          original_url?: string
          published_at?: string | null
          raw_data?: string | null
          source_name?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "news_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_sends: {
        Row: {
          content: string
          error_message: string | null
          id: string
          sent_at: string | null
          status: string | null
          subject: string
          subscription_id: string | null
        }
        Insert: {
          content: string
          error_message?: string | null
          id?: string
          sent_at?: string | null
          status?: string | null
          subject: string
          subscription_id?: string | null
        }
        Update: {
          content?: string
          error_message?: string | null
          id?: string
          sent_at?: string | null
          status?: string | null
          subject?: string
          subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_sends_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "newsletter_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          created_at: string | null
          custom_updates: boolean | null
          email: string
          frequency: string
          id: string
        }
        Insert: {
          created_at?: string | null
          custom_updates?: boolean | null
          email: string
          frequency: string
          id?: string
        }
        Update: {
          created_at?: string | null
          custom_updates?: boolean | null
          email?: string
          frequency?: string
          id?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string | null
          custom_updates: boolean | null
          email: string
          frequency: string
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          custom_updates?: boolean | null
          email: string
          frequency: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          custom_updates?: boolean | null
          email?: string
          frequency?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      pinterest_posts: {
        Row: {
          brand_id: string | null
          created_at: string | null
          description: string | null
          id: number
          image_url: string | null
          pin_id: string | null
        }
        Insert: {
          brand_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          pin_id?: string | null
        }
        Update: {
          brand_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          pin_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pinterest_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      source_logs: {
        Row: {
          created_at: string | null
          id: string
          new_posts: number | null
          source: string
          success: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          new_posts?: number | null
          source: string
          success?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          new_posts?: number | null
          source?: string
          success?: boolean | null
        }
        Relationships: []
      }
      tiktok_posts: {
        Row: {
          brand_id: string | null
          description: string | null
          id: number
          post_id: string | null
          timestamp: string | null
          video_url: string | null
        }
        Insert: {
          brand_id?: string | null
          description?: string | null
          id?: number
          post_id?: string | null
          timestamp?: string | null
          video_url?: string | null
        }
        Update: {
          brand_id?: string | null
          description?: string | null
          id?: number
          post_id?: string | null
          timestamp?: string | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tiktok_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      twitter_posts: {
        Row: {
          author_handle: string | null
          author_name: string | null
          brand_id: string | null
          content: string | null
          id: number
          likes: number | null
          media_urls: string | null
          original_url: string
          published_at: string | null
          raw_data: Json | null
          replies: number | null
          retweets: number | null
          tweet_id: string
          updated_at: string | null
        }
        Insert: {
          author_handle?: string | null
          author_name?: string | null
          brand_id?: string | null
          content?: string | null
          id?: number
          likes?: number | null
          media_urls?: string | null
          original_url: string
          published_at?: string | null
          raw_data?: Json | null
          replies?: number | null
          retweets?: number | null
          tweet_id: string
          updated_at?: string | null
        }
        Update: {
          author_handle?: string | null
          author_name?: string | null
          brand_id?: string | null
          content?: string | null
          id?: number
          likes?: number | null
          media_urls?: string | null
          original_url?: string
          published_at?: string | null
          raw_data?: Json | null
          replies?: number | null
          retweets?: number | null
          tweet_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "twitter_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["brand_id"]
          },
        ]
      }
      users: {
        Row: {
          account_id: string | null
          created_at: string | null
          email: string
          id: string
          username: string
        }
        Insert: {
          account_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          username: string
        }
        Update: {
          account_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_posts: {
        Row: {
          brand_id: string | null
          channel_handle: string | null
          channel_title: string | null
          comments: number | null
          description: string | null
          duration: string | null
          id: number
          likes: number | null
          original_url: string
          published_at: string | null
          raw_data: Json | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
          video_id: string
          views: number | null
        }
        Insert: {
          brand_id?: string | null
          channel_handle?: string | null
          channel_title?: string | null
          comments?: number | null
          description?: string | null
          duration?: string | null
          id?: number
          likes?: number | null
          original_url: string
          published_at?: string | null
          raw_data?: Json | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          video_id: string
          views?: number | null
        }
        Update: {
          brand_id?: string | null
          channel_handle?: string | null
          channel_title?: string | null
          comments?: number | null
          description?: string | null
          duration?: string | null
          id?: number
          likes?: number | null
          original_url?: string
          published_at?: string | null
          raw_data?: Json | null
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string | null
          video_id?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "youtube_posts_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["brand_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
