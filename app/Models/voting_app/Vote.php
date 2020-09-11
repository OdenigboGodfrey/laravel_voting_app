<?php

namespace App\Models\voting_app;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vote extends Model
{
    use  SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $guarded = [];

     /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function option() {
        return $this->belongsTo(Option::class);
    }
}
