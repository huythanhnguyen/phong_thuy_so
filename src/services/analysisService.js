import { apiClient, API_CONFIG } from './api'

const analysisService = {
  /**
   * Phân tích số điện thoại
   * @param {string} phoneNumber - Số điện thoại cần phân tích
   * @returns {Promise} - Kết quả phân tích
   */
  async analyzePhoneNumber(phoneNumber) {
    try {
      const response = await apiClient.post(API_CONFIG.ANALYSIS.ANALYZE, { phoneNumber })
      return response
    } catch (error) {
      console.error('Error analyzing phone number:', error)
      return { success: false, message: error.message }
    }
  },
  
  /**
   * Lấy lịch sử phân tích
   * @param {number} limit - Số lượng tối đa bản ghi
   * @param {number} page - Số trang
   * @returns {Promise} - Lịch sử phân tích
   */
  async getAnalysisHistory(limit = 20, page = 1) {
    try {
      const params = new URLSearchParams()
      if (limit) params.append('limit', limit)
      if (page) params.append('page', page)
      
      const queryString = params.toString() ? `?${params.toString()}` : ''
      const response = await apiClient.get(`${API_CONFIG.ANALYSIS.HISTORY}${queryString}`)
      
      // Chuẩn hóa dữ liệu phản hồi
      if (response.success && response.history && Array.isArray(response.history)) {
        response.data = response.history
      }
      
      return response
    } catch (error) {
      console.error('Error getting analysis history:', error)
      return { success: false, message: error.message, data: [] }
    }
  },
  
  /**
   * Xóa lịch sử phân tích
   * @returns {Promise} - Kết quả xóa lịch sử
   */
  async deleteAnalysisHistory() {
    try {
      const response = await apiClient.delete(API_CONFIG.ANALYSIS.DELETE_HISTORY)
      return response
    } catch (error) {
      console.error('Error deleting analysis history:', error)
      return { success: false, message: error.message }
    }
  },
  
  /**
   * Đặt câu hỏi về phân tích số điện thoại
   * @param {Object} payload - Dữ liệu câu hỏi
   * @returns {Promise} - Kết quả câu hỏi
   */
  async askQuestion(payload) {
    try {
      const response = await apiClient.post(API_CONFIG.ANALYSIS.QUESTION, payload)
      return response
    } catch (error) {
      console.error('Error asking question:', error)
      return { success: false, message: error.message }
    }
  },
  
  /**
   * Gửi phản hồi về phân tích
   * @param {string} analysisId - ID phân tích
   * @param {string} feedbackType - Loại phản hồi (positive/negative)
   * @param {string} comment - Bình luận phản hồi
   * @returns {Promise} - Kết quả gửi phản hồi
   */
  async sendFeedback(analysisId, feedbackType, comment = '') {
    try {
      const response = await apiClient.post(API_CONFIG.ANALYSIS.FEEDBACK, {
        analysisId,
        feedbackType,
        comment
      })
      return response
    } catch (error) {
      console.error('Error sending feedback:', error)
      return { success: false, message: error.message }
    }
  },
  
  /**
   * Lấy các phân tích gần đây
   * @param {number} limit - Số lượng tối đa bản ghi
   * @returns {Promise} - Các phân tích gần đây
   */
  async getRecentAnalyses(limit = 5) {
    try {
      const response = await apiClient.get(`${API_CONFIG.ANALYSIS.RECENT}?limit=${limit}`)
      return response
    } catch (error) {
      console.error('Error getting recent analyses:', error)
      return { success: false, message: error.message, data: [] }
    }
  }
}

export default analysisService