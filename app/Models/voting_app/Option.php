<?php

namespace App\Models\voting_app;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Option extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $guarded = [];

     /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function record() {
        return $this->belongsTo(Record::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function votes() {
        return $this->hasMany(Vote::class);
    }
}
